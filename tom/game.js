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


// MÄNGU ESIALGNE SEIS
drawGrid();

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

    if (map[playerY][playerX] === "exit" && keyFound) {
        exitOpen = true;
        drawGrid();
        return;
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
document.getElementById("command").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        processCommand(this.value);
        this.value = "";
    }
});
