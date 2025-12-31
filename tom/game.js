//levelid
const levels = [
    {
        size: 3,
        switches: 1,
        boxes: 6,
        map: [
            ["empty", "switch", "empty"],
            ["empty", "player", "empty"],
            ["empty", "empty", "exit"]
        ]
    },
    {
        size: 4, 
        switches: 1, 
        boxes: 8,
        map: [
            ["empty",  "empty",  "switch", "empty"],
            ["empty",  "empty",  "empty",  "empty"],
            ["player", "empty",  "empty",  "empty"],
            ["empty",  "empty",  "exit",   "empty"]
        ]
    },
    {
        size: 5, 
        switches: 2, 
        boxes: 10,
        map: [
            ["empty",  "empty",  "switch", "exit"],
            ["empty",  "empty",  "empty",  "empty"],
            ["switch", "empty",  "empty",  "empty"],
            ["empty",  "empty",  "empty",   "empty"],
            ["empty",  "player",  "empty", "empty"]
        ]
    }
];

let currentLevel = 0;
let gridSize = levels[currentLevel].size;
let map = [];
let switchesHit = 0;

let steps = 0;
const maxBoxes = 5;
let boxesLeft = maxBoxes;

let tomFailed = false;

let lightsOn = false;
let keyFound = false;
let exitOpen = false;
let gameWon = false;

let levelsCompleted = 0;

// Leveli laadimine
function loadLevel(levelIndex) {
    const level = levels[levelIndex];

    gridSize = level.size;
    map = JSON.parse(JSON.stringify(level.map));

    steps = 0;
    boxesLeft = level.boxes;

    lightsOn = false;
    keyFound = false;
    exitOpen = false;
    gameWon = false;
    switchesHit = 0;
    tomFailed = false;

    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            if (map[y][x] === "player") {
                playerX = x;
                playerY = y;
                map[y][x] = "empty";
            }
        }  
    }

    //updateGridCSS();
    drawGrid();
}

//CSS uuendamine
function updateGridCSS() {
    const area = document.getElementById("game-area");
    area.style.gridTemplateColumns = `repeat(${gridSize}, 80px)`;
    area.style.gridTemplateRows = `repeat(${gridSize}, 80px)`;
}

// Gridi joonistamine
function drawGrid() {
    /*const area = document.getElementById("game-area");

    // If running embedded in the main game page `#game-area` may be absent.
    // Only update DOM if the element exists; always update the main canvas view.
    if (area) {
        area.innerHTML = "";

        if (lightsOn) {
            area.classList.add("lights-on");
        } else {
            area.classList.remove("lights-on");
        }

        for (let y = 0; y < gridSize; y++) {
            for (let x = 0; x < gridSize; x++) {

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

    drawSteps();
    // Always update canvas view so integrations can render the game to the main `#map` canvas.
    try { drawGridToCanvas(); } catch (e) {}*/
    drawGridToCanvas();
}

//Kuva sammud
function drawSteps() {
    const bar = document.getElementById("steps-bar");
    bar.innerHTML = "";

    for (let i = 0; i < boxesLeft; i++) {
        const box = document.createElement("div");
        box.className = "step-box";
        bar.appendChild(box);
        
    }
}

// Also render a simplified view to the main canvas (`#map`) when present.
function drawGridToCanvas() {
    const canvas = document.getElementById('map');
    const uiHeight = 40;

    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    // Match main game scaling: account for zoom and HiDPI
    const rect = canvas.getBoundingClientRect();
    const zoomFactor = 0.8; // same as #game-container zoom
    const dpr = window.devicePixelRatio || 1;
    const adjustedWidth = Math.max(1, rect.width / zoomFactor);
    const adjustedHeight = Math.max(1, rect.height / zoomFactor);

    const backingW = Math.max(1, Math.round(adjustedWidth * dpr));
    const backingH = Math.max(1, Math.round(adjustedHeight * dpr));

    canvas.width = backingW;
    canvas.height = backingH;
    canvas.style.width = `${adjustedWidth}px`;
    canvas.style.height = `${adjustedHeight}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cellW = Math.floor(adjustedWidth / gridSize);
    const cellH = Math.floor((adjustedHeight - uiHeight)/ gridSize);

    // background
    ctx.fillStyle = lightsOn ? '#ffffff' : '#111111';
    ctx.fillRect(0, 0, adjustedWidth, adjustedHeight);

    // steps
    for (let i = 0; i < boxesLeft; i++) {
        ctx.fillStyle = '#00ff00';
        ctx.fillRect(10 + i * 22, 10, 18, 18);
    }

    // Prefer crisp rendering for this grid
    ctx.imageSmoothingEnabled = false;

    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            const cx = x * cellW;
            const cy = uiHeight + y * cellH;

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

    if (cmd === "quit" || cmd === "exit") {
        let score = calculateTomScore();
        gameState.score += score;
        
        typeWriter(`\nYou exited the mini-game. You completed ${levelsCompleted} levels and received ${score} points.\n`);

        const result = {
            pub: 'Bar Amazon',
            question: 'Tom mini-game',
            userAnswer: `${levelsCompleted} levels (quit)`,
            correctAnswer: '3 levels',
            isCorrect: false
        };
        gameState.taskResults.push(result);

        if (typeof saveAnswer === 'function' && gameState.sessionId) {
            saveAnswer(gameState.sessionId, result.pub, result.question, result.userAnswer, result.correctAnswer, result.isCorrect);
        }

        if (typeof updateGameSession === 'function' && gameState.sessionId) {
            updateGameSession(gameState.sessionId, gameState.score, gameState.totalCorrectAnswers, gameState.taskResults.length, gameState.timeElapsed, false);
        }

        if (typeof stopTomGame === 'function') {
            stopTomGame();
        }
        return;
    }

    let newX = playerX;
    let newY = playerY;

    if (cmd === "up") newY--;
    else if (cmd === "down") newY++;
    else if (cmd === "left") newX--;
    else if (cmd === "right") newX++;
    else if (cmd === "hit") return useHit();
    else return;

    // Kontrolli piire
    if (newX < 0 || newX >= gridSize || newY < 0 || newY >= gridSize) {
        return;
    }

    playerX = newX;
    playerY = newY;

    steps++;

    if (steps % 3 === 0) {
        boxesLeft--;
        if (boxesLeft <= 0) {
           gameWon = true;
           endTomGame(false);
           return;
        }
    }

    checkRoom();
    drawGrid();
}

// HIT käsu loogika
function useHit() {
    if (map[playerY][playerX] === "switch") {
        map[playerY][playerX] = "empty";
        switchesHit++;

         if (switchesHit === levels[currentLevel].switches) {
            lightsOn = true;

            // place key
            let placed = false;
            while (!placed) {
                let rx = Math.floor(Math.random() * gridSize);
                let ry = Math.floor(Math.random() * gridSize);
                if (map[ry][rx] === "empty") {
                    map[ry][rx] = "key";
                    placed = true;
                }
            }
        }

        drawGrid();
        return;
    }

    if (map[playerY][playerX] === "exit" && keyFound) {
        levelsCompleted++;
        currentLevel++;

        if (currentLevel < levels.length) {
            loadLevel(currentLevel);
            drawGrid();
        } else {
            endTomGame(true);
        }
    }

    return;
}

function endTomGame(won) {
    gameState.inTomGame = false;

    let score = calculateTomScore();
    
    if (won) {
        typeWriter(`\nYou completed ${levelsCompleted} levels! +${score} points\n`);
        gameState.totalCorrectAnswers++;
    } else {
        typeWriter(`\nYou ran out of steps. You recieved ${score} points.\n`);
    }

    gameState.score += score;

    gameState.taskResults.push({
        pub: 'Bar Amazon',
        question: 'Tom mini-game',
        userAnswer: `${levelsCompleted} levels`,
        correctAnswer: '3 levels',
        isCorrect: won
    });

    if (typeof saveAnswer === 'function' && gameState.sessionId) {
        saveAnswer(gameState.sessionId, 'Bar Amazon', 'Tom mini-game', `${levelsCompleted} levels`, '3 levels', won);
    }

    if (typeof updateGameSession === 'function' && gameState.sessionId) {
        updateGameSession(gameState.sessionId, gameState.score, gameState.totalCorrectAnswers, gameState.taskResults.length, gameState.timeElapsed, false);
    }

    stopTomGame();
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

// Arvuta tulemus

function calculateTomScore() {
    if (levelsCompleted === 1) {
        return 20;
    }
    if (levelsCompleted === 2) {
        return 50;
    }
    if (levelsCompleted === 3) {
        return 100;
    }
    return 0;
}
