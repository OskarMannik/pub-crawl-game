const gameState = {
    location: "start",
    map: {},
};

function initializeGame() {
    const output = document.getElementById("output");
    const input = document.getElementById("input");

    typeWriter("Welcome to the Pub Crawl game!\nType 'help' for a list of commands.\n");

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const command = input.value.trim();
            input.value = "";
            handleCommand(command);
        }
    });
}

function typeWriter(text, speed = 24) {
    const output = document.getElementById("output");
    let i = 0;

    function typing() {
        output.textContent += text.charAt(i);
        i++;
        output.scrollTop = output.scrollHeight;
        if (i < text.length) {
            setTimeout(typing, speed);
        }
    }
    typing();
}

function handleCommand(command) {

    switch (command.toLowerCase()) {
        case "help":
            typeWriter("\nAvailable commands:\n- help: Show this help message\n");
            break;

        default:
            typeWriter("\nUnknown command. Type 'help' for a list of commands.\n");
            break;
    }
}

window.onload = initializeGame;
