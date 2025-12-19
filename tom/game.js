// 4x4 leveli kaart
let map = [
    ["empty",  "empty",  "switch", "empty"],
    ["empty",  "empty",  "empty",  "empty"],
    ["player", "empty",  "empty",  "empty"],
    ["empty",  "empty",  "exit",   "empty"]
];

let playerX = 0;
let playerY = 2;

let lightsOn = false;
let keyFound = false;
let exitOpen = false;
let gameWon = false;

//const log = document.getElementById("log");

// LOG FUNKTSIOON
/*
function writeLog(msg) {
    log.innerHTML += msg + "<br>";
    log.scrollTop = log.scrollHeight;
}*/

// GRIDI JOONISTAMINE
function drawGrid() {
    const area = document.getElementById("game-area");

    // If running embedded in the main game page `#game-area` may be absent.
    // Only update DOM if the element exists; always update the main canvas view.
    if (area) {
        area.innerHTML = "";

        if (lightsOn) {
            area.classList.add("lights-on");
        } else {
            area.classList.remove("lights-on");
        }

        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {

                const cell = document.createElement("div");
                cell.classList.add("cell");

                const content = document.createElement("div");
                content.classList.add("cell-content");

                // player
                if (x === playerX && y === playerY) {
                    const p = document.createElement("div");
                    p.classList.add("player-icon");
                    content.appendChild(p);
                }

                // switch only visible if player is inside same room
                if (map[y][x] === "switch" && (x === playerX && y === playerY)) {
                    const s = document.createElement("div");
                    s.classList.add("switch-icon");
                    content.appendChild(s);
                }

                // key only visible after lights on, and small
                if (lightsOn && map[y][x] === "key" && !keyFound) {
                    const k = document.createElement("div");
                    k.classList.add("key-icon");
                    content.appendChild(k);
                }

                // exit icon
                if (map[y][x] === "exit") {
                    const e = document.createElement("div");
                    e.classList.add("exit-icon");
                    if (exitOpen) {
                        e.classList.add("open");
                    }
                    content.appendChild(e);
                }

                cell.appendChild(content);
                area.appendChild(cell);
            }
        }
    }

    // Always update canvas view so integrations can render the game to the main `#map` canvas.
    try { drawGridToCanvas(); } catch (e) {}
}

// Also render a simplified view to the main canvas (`#map`) when present.
function drawGridToCanvas() {
    const canvas = document.getElementById('map');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    // Use CSS pixel sizes (user-space) so HiDPI transform is handled by setupCanvasForHiDPI
    const rect = canvas.getBoundingClientRect();
    const cssWidth = Math.max(1, Math.round(rect.width));
    const cssHeight = Math.max(1, Math.round(rect.height));
    const cellW = Math.floor(cssWidth / 4);
    const cellH = Math.floor(cssHeight / 4);

    // background
    ctx.fillStyle = lightsOn ? '#ffffff' : '#111111';
    ctx.fillRect(0, 0, cssWidth, cssHeight);
    // Prefer crisp rendering for this grid
    ctx.imageSmoothingEnabled = false;

    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            const cx = x * cellW;
            const cy = y * cellH;

            // cell background
            ctx.fillStyle = '#222';
                ctx.fillRect(cx + 2, cy + 2, cellW - 4, cellH - 4);

            // switch icon (only visible when player in same cell)
            if (map[y][x] === 'switch' && x === playerX && y === playerY) {
                ctx.fillStyle = '#ffcc00';
                ctx.fillRect(cx + cellW/4, cy + cellH/4, cellW/2, cellH/2);
            }

            // key (visible only if lights on and not yet picked)
            if (lightsOn && map[y][x] === 'key' && !keyFound) {
                ctx.fillStyle = '#00ccff';
                ctx.beginPath();
                ctx.arc(cx + cellW/2, cy + cellH/2, Math.min(cellW,cellH)/6, 0, Math.PI*2);
                ctx.fill();
            }

            // exit
            if (map[y][x] === 'exit') {
                ctx.strokeStyle = exitOpen ? '#00ff00' : '#888888';
                ctx.lineWidth = 3;
                ctx.strokeRect(cx + 6, cy + 6, cellW - 12, cellH - 12);
                if (gameWon) {
                    ctx.fillStyle = '#00ff00';
                    ctx.font = '20px sans-serif';
                    ctx.fillText('WIN', cx + 10, cy + cellH/2);
                }
            }

            // player
            if (x === playerX && y === playerY) {
                ctx.fillStyle = '#ff4444';
                ctx.beginPath();
                ctx.arc(cx + cellW/2, cy + cellH/2, Math.min(cellW,cellH)/6, 0, Math.PI*2);
                ctx.fill();
            }
        }
    }
}


// MÄNGU ESIALGNE SEIS
// drawGrid();

// KÄSKUDE TÖÖTLEMINE
function processCommand(cmd) {
    cmd = cmd.toLowerCase().trim();

    let newX = playerX;
    let newY = playerY;

    if (cmd === "up") newY--;
    else if (cmd === "down") newY++;
    else if (cmd === "left") newX--;
    else if (cmd === "right") newX++;
    else if (cmd === "hit") return useHit();
    else return;

    // Kontrolli piire
    if (newX < 0 || newX > 3 || newY < 0 || newY > 3) {
        return;
    }

    playerX = newX;
    playerY = newY;

    checkRoom();
    drawGrid();
}

// HIT käsu loogika
function useHit() {
    if (map[playerY][playerX] === "switch") {
        lightsOn = true;

        // leia juhuslik ruut võtme jaoks
        let placed = false;
        while (!placed) {
            let rx = Math.floor(Math.random() * 4);
            let ry = Math.floor(Math.random() * 4);

            if (map[ry][rx] === "empty") {
                map[ry][rx] = "key";
                placed = true;
            }
        }

        drawGrid();
        return;
    }

    if (map[playerY][playerX] === "exit") {
        if (keyFound || exitOpen) {
            exitOpen = true;
            gameWon = true;
            drawGrid();
            return;
        }
    }

    return;
}

// Kontroll, mis toas ollakse
function checkRoom() {
    if (lightsOn && map[playerY][playerX] === "key" && !keyFound) {
        keyFound = true;
    }
}

// SISENEMINE ENTERIGA
// If there is a local `#command` input (standalone page), attach the listener.
const _cmdEl = document.getElementById("command");
if (_cmdEl) {
    _cmdEl.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            processCommand(this.value);
            this.value = "";
        }
    });
}

// (wrapper removed) drawGrid now calls drawGridToCanvas internally.
