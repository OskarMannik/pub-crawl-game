const locations = {
    'start': {
        name: 'START',
        description: 'You are at the starting point.',
        isPub: false,
        connections: {
            'down': { destination: 'junction1', length: 5 }
        }
    },
    'junction1': {
        name: 'JUNCTION',
        description: '',
        isPub: false,
        connections: {
            'up': { destination: 'start', length: 5 },
            'left': { destination: 'bar_rainbow', length: 15 },
            'down': { destination: 'pub_acropolis', length: 20 }
        }
    },
    'bar_rainbow': {
        name: 'Bar Rainbow',
        //description: 'When you enter bar Rainbow then the first thing you see is a colourful choice of different drinks. They vary from green to red to blue and much more. The whole wall behind the counter is full of shelves, which are filled with the mentioned drinks. The barmen greet you with a big smile and offer you a drink. You refuse kindly (for now) as you have a task to complete and search around for the taskmaster. There are two different rooms you can go to, on the left side there are some tables, a sofa and some chairs and on the right side there is a small dancefloor. You decide to approach the calmer room with the sofa as there seems to be more light and you need light to do your task. The room was very cozy. It does not have a lot of room but just enough to fit a few small groups of people. The walls are dark brown and the ceiling was very high. There was also a minimalist chandelier hanging down from the ceiling, which you found very inspiring. In the corner you notice the taskmaster and he gives you the task. Do you want to start the task? (yes/no)',
        description: 'When you enter bar Rainbow then the first thing you see is a colourful choice of different drinks. They vary from green to red to blue and much more. The whole wall behind the counter is full of shelves, which are filled with the mentioned drinks. The barmen greet you with a big smile and offer you a drink. You refuse kindly (for now) as you have a task to complete and search around for the taskmaster. There are two different rooms you can go to, on the left side there are some tables, a sofa and some chairs and on the right side there is a small dancefloor. You decide to approach the calmer room with the sofa as there seems to be more light and you need light to do your task. The room was very cozy. It does not have a lot of room but just enough to fit a few small groups of people. The walls are dark brown and the ceiling was very high. There was also a minimalist chandelier hanging down from the ceiling, which you found very inspiring. In the corner you notice the taskmaster and he gives you the task. Do you want to start the task? (yes/no)',
        isPub: true,
        tasks: [
            {
                question: 'How many triangles are formed by letters in the geometric diagram?',
                image: 'images/bar_rainbow_q1.jpg',
                correct: '2' // siis kui on vaba tekstiga vastus ehk ilma multiple answerita ss peab olema stringina ja ss ärge answers massiivi lisage
            },
            {
                question: 'Each card has a number on one side and a color on the other side. The rule to test is: “If a card has an even number on one side, then its other side is blue.” Which card or cards do you need to turn over to test whether the rule is true (minimal number of cards)?',
                image: 'images/bar_rainbow_q2.jpg',
                answers: ['8, green and blue', '8 and blue', '8 and green', '3 and green'],
                correct: 2
            },
            {
                question: 'Manny had 3 birthday cookie pies to share with his 24 classmates and his teacher, Mr. Keith. If each of the cookie pies were cut into 10 slices and Manny, his classmates, and Mr. Keith all had 1 piece, how many slices are left?',
                correct: '4'
            },
            {
                question: 'What is the missing number?',
                image: 'images/bar_rainbow_q3.jpg',
                answers: ['20', '14', '13', '12'],
                correct: 1
            },
            {
                question: 'There are three times as many chairs as tables in a room. If there are 20 pieces of furniture in total, how many chairs are there?',
                correct: '15'
            }
        ],
        connections: {
            'up': { destination: 'junction2', length: 5 },
            'right': { destination: 'junction1', length: 15 }
        }
    },
    'pub_acropolis': {
        name: 'Pub Acropolis',
        //description: 'You enter an old looking building which from the outside looks peaceful but when you enter, you realise that it is much more alive than you would have guessed. It is a dark room where RGB lights flash and dance around the walls from time to time. In front of you there stands a tall mirror where people check their outfits and make social media pictures. Instead of the mirror your interest is drawn to the long dance floor. There are multiple tall pillars standing around the room and on the left side of the room there is a counter, which is as long as the whole room. The whole wall behind the counter is a mirror and while looking around you realise that the wall facing the counter is also a huge mirror. In one corner of the counter you see a familiar face and instantly know that he will give you your next task. You make your way towards the person. Do you want to start the task? (yes/no)',
        description: 'You enter an old looking building which from the outside looks peaceful but when you enter, you realise that it is much more alive than you would have guessed. It is a dark room where RGB lights flash and dance around the walls from time to time. In front of you there stands a tall mirror where people check their outfits and make social media pictures. Instead of the mirror your interest is drawn to the long dance floor. There are multiple tall pillars standing around the room and on the left side of the room there is a counter, which is as long as the whole room. The whole wall behind the counter is a mirror and while looking around you realise that the wall facing the counter is also a huge mirror. In one corner of the counter you see a familiar face and instantly know that he will give you your next task. You make your way towards the person. Do you want to start the task? (yes/no)',
        isPub: true,
        // Note: tasks removed — Acropolis uses the shorttermmemory integration instead
        connections: {
            'up': { destination: 'junction1', length: 20 },
            'right': { destination: 'junction5', length: 25 },
            'down': { destination: 'junction3', length: 10 }
        }
    },
    'pub_tropico': {
        name: 'Pub Tropico',
        //description: 'From far away you can see a small restaurant next to a bridge. There seems to be a very long line but you still have to complete your task. You walk inside and find yourself in a small but bright bar. On the walls there are a lot of motivational Spanish messages and empty beer bottles that serve a decorative purpose. Shelves behind the beige counter are filled with various tasty beverages. Most of the bottles on the wall are small Mexican beer bottles. On the left hand side you notice a big Jamaican flag hanging from the ceiling and under it stands a table, where your task is set up. You walk towards the task through the bar while listening to the latin tunes coming from the radio. Do you want to start the task? (yes/no)',
        description: 'From far away you can see a small restaurant next to a bridge. There seems to be a very long line but you still have to complete your task. You walk inside and find yourself in a small but bright bar. On the walls there are a lot of motivational Spanish messages and empty beer bottles that serve a decorative purpose. Shelves behind the beige counter are filled with various tasty beverages. Most of the bottles on the wall are small Mexican beer bottles. On the left hand side you notice a big Jamaican flag hanging from the ceiling and under it stands a table, where your task is set up. You walk towards the task through the bar while listening to the latin tunes coming from the radio. Do you want to start the task? (yes/no)'
        ,isPub: true,
        // Note: tasks removed — Tropico uses the shorttermmemory integration instead
        connections: {
            'left': { destination: 'junction3', length: 5 }
        }
    },
    'junction2': {
        name: 'JUNCTION',
        description: '',
        isPub: false,
        connections: {
            'down': { destination: 'bar_rainbow', length: 5 },
            'right': { destination: 'junction4', length: 30 }
        }
    },
    'junction4': {
        name: 'JUNCTION',
        description: '',
        isPub: false,
        connections: {
            'down': { destination: 'junction5', length: 20 },
            'right': { destination: 'junction10', length: 5 },
            'left': { destination: 'junction2', length: 30  }
        }
    },
    'junction3': {
        name: 'JUNCTION',
        description: '',
        isPub: false,
        connections: {
            'up': { destination: 'pub_acropolis', length: 10 },
            'right': { destination: 'pub_tropico', length: 5 }
        }
    },
    'junction5': {
        name: 'JUNCTION',
        description: '',
        isPub: false,
        connections: {
            'right': { destination: 'junction8', length: 35 },
            'down': { destination: 'junction6', length: 20 },
            'up': { destination: 'junction4', length: 20 },
            'left': { destination: 'pub_acropolis', length: 25 }
        }
    },
    'bar_amazon': {
        name: 'Bar Amazon',
        //description: 'You walk on a wide and loud street that has cars parked all around the edges of the road. High up on the side of a house you see a big sign with a palm leaf on it. This is where you will find your next task. You enter the building and walk up the stairs that lead to a small dimly lighted room. On one side of the room there is a counter, where one can give their coats or jackets and a small corridor that leads to a larger room. The other side of the room has multiple plants besides the wall and a small mirror right at the center. A man greets you and offers to take your coat. You give it to him and continue to the larger room. The larger room has a huge dance floor. On one side of the dance floor there is a stage for bands and artists. The other side is a big area where there are tables, sofas and besides the wall there is a bar counter. The walls are decorated with different impressionistic paintings, which give a fancier feeling to the place.  Under one of the paintings a girl is trying to catch your attention to give you the next task. You approach her and she hands you the task. Do you want to start the task? (yes/no)',
        description: 'You walk on a wide and loud street that has cars parked all around the edges of the road. High up on the side of a house you see a big sign with a palm leaf on it. This is where you will find your next task. You enter the building and walk up the stairs that lead to a small dimly lighted room. On one side of the room there is a counter, where one can give their coats or jackets and a small corridor that leads to a larger room. The other side of the room has multiple plants besides the wall and a small mirror right at the center. A man greets you and offers to take your coat. You give it to him and continue to the larger room. The larger room has a huge dance floor. On one side of the dance floor there is a stage for bands and artists. The other side is a big area where there are tables, sofas and besides the wall there is a bar counter. The walls are decorated with different impressionistic paintings, which give a fancier feeling to the place.  Under one of the paintings a girl is trying to catch your attention to give you the next task. You approach her and she hands you the task. Do you want to start the task? (yes/no)',
        isPub: true,
        tasks: [
            {
                question: 'Which artist painted this?',
                image: 'images/bar_amazon_q1.jpg',
                answers: ['Monet', 'Renoir', 'Degas', 'Manet'],
                correct: 0
            },
            {
                question: 'How many plants are beside the wall?',
                image: 'images/bar_amazon_q2.jpg',
                answers: ['3', '5', '7', '9'],
                correct: 1
            },
            {
                question: 'What is on the stage?',
                image: 'images/bar_amazon_q3.jpg',
                answers: ['Piano', 'Drums', 'Guitar', 'Microphone'],
                correct: 2
            },
            {
                question: 'What shape is the mirror?',
                image: 'images/bar_amazon_q4.jpg',
                answers: ['Round', 'Square', 'Oval', 'Rectangle'],
                correct: 0
            },
            {
                question: 'How many impressionistic paintings are visible?',
                image: 'images/bar_amazon_q5.jpg',
                answers: ['2', '3', '4', '5'],
                correct: 1
            }
        ],
        connections: {
            'up': { destination: 'junction6', length: 10 }
        }
    },
    'the_nature_bar': {
        name: 'The Nature Bar',
        //description: 'You find yourself in a quiet bar. Much quieter than the other bars you have visited today. There is a deck next to the bar and a small road that leads to the back of the house and you decide to look for your task outside. The deck is surrounded by a tall wooden fence. From behind the fence you notice some trees. Most of them are birch trees but there are also an oak and two pines. You move around the corner and see a huge group of people. They are surrounding a table tennis player where two tall men are playing. Two people are watching the match from a third floor balcony from the neighbouring house. Next to the group of people there seems to be some other, smaller group. You assume that this is your next task and you assume correctly. The person responsible for the task waves you to come closer and you obey. She gives you the task. Do you want to start the task? (yes/no)',
        description: 'You find yourself in a quiet bar. Much quieter than the other bars you have visited today. There is a deck next to the bar and a small road that leads to the back of the house and you decide to look for your task outside. The deck is surrounded by a tall wooden fence. From behind the fence you notice some trees. Most of them are birch trees but there are also an oak and two pines. You move around the corner and see a huge group of people. They are surrounding a table tennis player where two tall men are playing. Two people are watching the match from a third floor balcony from the neighbouring house. Next to the group of people there seems to be some other, smaller group. You assume that this is your next task and you assume correctly. The person responsible for the task waves you to come closer and you obey. She gives you the task. Do you want to start the task? (yes/no)',
        isPub: true,
        tasks: [
            {
                question: 'How many birch trees are visible?',
                image: 'images/nature_bar_q1.jpg',
                answers: ['3', '5', '7', '9'],
                correct: 1
            },
            {
                question: 'How many people are watching from the balcony?',
                image: 'images/nature_bar_q2.jpg',
                answers: ['1', '2', '3', '4'],
                correct: 1
            },
            {
                question: 'What color is the table tennis table?',
                image: 'images/nature_bar_q3.jpg',
                answers: ['Blue', 'Green', 'Red', 'Black'],
                correct: 0
            },
            {
                question: 'What material is the fence made of?',
                image: 'images/nature_bar_q4.jpg',
                answers: ['Metal', 'Wood', 'Plastic', 'Brick'],
                correct: 1
            },
            {
                question: 'How many pine trees are there?',
                image: 'images/nature_bar_q5.jpg',
                answers: ['1', '2', '3', '4'],
                correct: 1
            }
        ],
        connections: {
            'up': { destination: 'junction10', length: 10 },
            'right': { destination: 'junction9', length: 5 }
        }
    },
    'junction6': {
        name: 'JUNCTION',
        description: '',
        isPub: false,
        connections: {
            'down': { destination: 'bar_amazon', length: 10 },
            'up': { destination: 'junction5', length: 20 },
            'right': { destination: 'junction7', length: 30  }
        }
    },
    'junction7': {
        name: 'JUNCTION',
        description: '',
        isPub: false,
        connections: {
            'down': { destination: 'finish', length: 10 },
            'left': { destination: 'junction6', length: 30 },
            'up': { destination: 'junction8', length: 20 }
        }
    },
    'junction8': {
        name: 'JUNCTION',
        description: '',
        isPub: false,
        connections: {
            'down': { destination: 'junction7', length: 20 },
            'up': { destination: 'junction9', length: 10 },
            'left': { destination: 'junction5', length: 35 }
        }
    },
    'junction9': {
        name: 'JUNCTION',
        description: '',
        isPub: false,
        connections: {
            'down': { destination: 'junction8', length: 10 },
            'left': { destination: 'the_nature_bar', length: 5 }
        }
    },
    'junction10': {
        name: 'JUNCTION',
        description: '',
        isPub: false,
        connections: {
            'left': { destination: 'junction4', length: 5 },
            'down': { destination: 'the_nature_bar', length: 10 }
        }
    },
    'finish': {
        name: 'FINISH',
        description: 'You have reached the finish! Congratulations!',
        isPub: false,
        connections: {
        }
    }
};

const gameState = {
    location: 'start',
    timeElapsed: 0,
    maxTime: 280,
    gameOver: false,
    isTyping: false,
    typeQueue: [],
    waitingForTaskResponse: false,
    inTask: false,
    currentTaskQuestions: [],
    currentQuestionIndex: 0,
    currentQuestionMode: null,
    imageLoadToken: 0,
    tasksCompleted: 0,
    totalTasksInPub: 5
};

function initializeGame() {
    const input = document.getElementById("input");

    typeWriter("Welcome to the Pub Crawl game!\nYou have 280 minutes to complete the pub crawl.\nAvailable commands:\n- up, down, left, right: Move in that direction\n- time: Check remaining time\n");
    drawMap();

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && !gameState.isTyping) {
            const command = input.value.trim();
            input.value = "";
            handleCommand(command);
        }
    });
}

function drawMap() {
    const canvas = document.getElementById('map');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const token = ++gameState.imageLoadToken;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const img = new Image();
    img.onload = function() {
        if (gameState.imageLoadToken !== token) return;
        const maxWidth = canvas.width * 0.95;
        const maxHeight = canvas.height;
        let width = img.width;
        let height = img.height;

        const ratio = Math.min(maxWidth / width, maxHeight / height, 1);
        width = width * ratio;
        height = height * ratio;

        const x = (canvas.width - width) / 2;
        const y = (canvas.height - height) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, width, height);
    };
    
    img.src = 'images/map.png';

}

function displayTaskImage(imageUrl, question, answers) {
    const canvas = document.getElementById('map');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const token = ++gameState.imageLoadToken;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // If no imageUrl provided but question (text) is provided, draw the text on the canvas.
    if (!imageUrl) {
        // draw text on canvas when no image provided
        if (question && question.length > 0) {
            // Draw wrapped, readable text on canvas (white on dark background)
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#ffffff';
            const padding = 12;
            const maxWidth = canvas.width - padding * 2;
            const lineHeight = 26;
            // Use a larger font to improve visibility
            ctx.font = '20px monospace';
            ctx.textBaseline = 'top';

            const words = String(question).split(' ');
            let line = '';
            let y = padding;
            for (let n = 0; n < words.length; n++) {
                const testLine = line + (line ? ' ' : '') + words[n];
                const testWidth = ctx.measureText(testLine).width;
                if (testWidth > maxWidth && line) {
                    ctx.fillText(line, padding, y);
                    line = words[n];
                    y += lineHeight;
                } else {
                    line = testLine;
                }
            }
            if (line) ctx.fillText(line, padding, y);
        } else {
            // nothing to draw — show placeholder to make it obvious
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#ffffff';
            ctx.font = '18px monospace';
            ctx.fillText('[No text to display]', 12, 12);
        }
        return;
    }

    const img = new Image();
    img.onload = function() {
        if (gameState.imageLoadToken !== token) return;
        const maxWidth = canvas.width - 20;
        const maxHeight = canvas.height - 20;
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
            height = (maxWidth / width) * height;
            width = maxWidth;
        }
        if (height > maxHeight) {
            width = (maxHeight / height) * width;
            height = maxHeight;
        }

        const x = (canvas.width - width) / 2;
        const y = (canvas.height - height) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, width, height);
    };
    img.onerror = function() {
        if (gameState.imageLoadToken !== token) return;
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ff00';
        ctx.font = '16px monospace';
        ctx.fillText('[Image not available]', 10, 30);
    };
    img.src = imageUrl;
}

function getRandomTasks(tasksArray, count) {
    const shuffled = [...tasksArray].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// Integration adapter for shorttermmemory (shorttermmemory/game.js defines global `items` and `questions`)
function startShortTermMemoryTask() {
    // Ensure shorttermmemory's data exists
    if (typeof items === 'undefined' || typeof questions === 'undefined') {
        // fallback to normal task behaviour
        const currentLocation = locations[gameState.location];
        gameState.currentTaskQuestions = getRandomTasks(currentLocation.tasks, 5);
        gameState.currentQuestionIndex = 0;
        gameState.tasksCompleted = 0;
        gameState.inTask = true;
        showNextQuestion();
        return;
    }

    gameState.waitingForTaskResponse = false;
    // Viewing phase is not the same as answering a task: mark inTask=false so input is processed as 'next'
    gameState.inTask = false;
    // Viewing phase setup
    gameState.memory = {
        viewing: true,
        currentIndex: 0,
        items: Array.isArray(items) ? items : [],
        questions: Array.isArray(questions) ? questions : [],
        viewStartTime: Date.now(),
        viewTotalTime: 0,
        shuffledQuestions: [],
        shuffledChoices: [],
        userAnswers: []
    };

    // show first item
    // Display an intro instruction in the terminal and then show the first item on canvas.
    typeWriter("\nViewing phase: objects will be shown in the image window. Type 'next' to advance through objects. Do NOT type answers until the question phase starts.\n");
    showNextMemoryItem();
}

function showNextMemoryItem() {
    const mem = gameState.memory;
    if (!mem) return;
    // if still in viewing phase
    if (mem.viewing) {
        const idx = mem.currentIndex;
        // If index is within range, show the item at that index on the canvas.
        if (idx < mem.items.length) {
            const item = mem.items[idx];
            // If there's an image defined for this index in shorttermmemory's questions, try to load it.
            const q = mem.questions[idx];
            if (q && q.image) {
                const imgSrc = `shorttermmemory/images/${q.image}`;
                const probe = new Image();
                probe.onload = function() {
                    // image exists, display it
                    displayTaskImage(imgSrc, '');
                };
                probe.onerror = function() {
                    // image failed to load — mark image null so it won't be used later and show text instead
                    try { mem.questions[idx].image = null; } catch (e) {}
                    displayTaskImage(null, item.text || '');
                };
                // start loading
                probe.src = imgSrc;
            } else {
                // draw the item's text on the canvas (so terminal doesn't reveal it)
                displayTaskImage(null, item.text || '');
            }

            // Prompt user to type 'next' to continue (do not reveal the item in terminal)
            typeWriter(`\nItem ${idx + 1} of ${mem.items.length} displayed in the image window. Type 'next' to continue.\n`);
            // Set a flag so handleCommand knows we're waiting for 'next'
            gameState.waitingForMemoryNext = true;
            return;
        }

        // End of viewing phase (user has advanced past last item)
        mem.viewTotalTime = Math.round((Date.now() - mem.viewStartTime) / 1000);
        mem.viewing = false;
        gameState.waitingForMemoryNext = false;

        // Clear canvas so objects are not visible during question phase
        displayTaskImage(null);

        // Prepare shuffled questions and choices for the answering phase
        mem.shuffledQuestions = mem.questions.map((q, idx) => ({...q, origIndex: idx}));
        // simple Fisher-Yates shuffle
        for (let i = mem.shuffledQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [mem.shuffledQuestions[i], mem.shuffledQuestions[j]] = [mem.shuffledQuestions[j], mem.shuffledQuestions[i]];
        }

        // For each question, shuffle choices and map correct index
        mem.shuffledChoices = mem.shuffledQuestions.map(q => {
            const indices = q.choices.map((_, i) => i);
            for (let i = indices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [indices[i], indices[j]] = [indices[j], indices[i]];
            }
            return indices;
        });

        // Build questions in format expected by showNextQuestion
        gameState.currentTaskQuestions = mem.shuffledQuestions.map((q, qi) => {
            const order = mem.shuffledChoices[qi];
            const answers = order.map(origIdx => q.choices[origIdx]);
            // find new correct index
            const newCorrect = order.indexOf(q.answer);
            return {
                question: q.q || '',
                // Do not show object/question images during the answering phase for shorttermmemory task
                image: null,
                answers: answers,
                correct: newCorrect
            };
        });

        gameState.currentQuestionIndex = 0;
        gameState.totalTasksInPub = gameState.currentTaskQuestions.length;
        // Mark that we are entering the answering phase
        gameState.inTask = true;
        // Small pause before starting questions
        setTimeout(() => showNextQuestion(), 800);
        return;
    }
}

function typeWriter(text, speed = 10) {
    // Queue texts so multiple typeWriter calls don't interleave
    const enqueue = (t, s) => {
        gameState.typeQueue.push({ text: t, speed: s });
        if (!gameState.isTyping) processQueue();
    };

    const processQueue = () => {
        if (gameState.typeQueue.length === 0) return;
        const next = gameState.typeQueue.shift();
        const output = document.getElementById("output");
        const input = document.getElementById("input");
        let i = 0;
        gameState.isTyping = true;
        if (input) input.disabled = true;

        function typing() {
            output.textContent += next.text.charAt(i);
            i++;
            output.scrollTop = output.scrollHeight;
            if (i < next.text.length) {
                setTimeout(typing, next.speed);
            } else {
                gameState.isTyping = false;
                if (input) {
                    input.disabled = false;
                    input.focus();
                }
                // process next queued text if any
                if (gameState.typeQueue.length > 0) {
                    // small delay between queued messages so they feel natural
                    setTimeout(processQueue, 50);
                }
            }
        }
        typing();
    };

    enqueue(text, speed);
}

function movePlayer(direction) {
    if (gameState.gameOver) {
        typeWriter("\nGame is over. Please refresh to play again.\n");
        return;
    }

    const currentLoc = locations[gameState.location];
    const connection = currentLoc.connections[direction.toLowerCase()];

    if (connection) {
        const nextLocationKey = connection.destination;
        const pathLength = connection.length;
        
        gameState.timeElapsed += pathLength;
        gameState.location = nextLocationKey;
        const newLocation = locations[gameState.location];
        
        if (gameState.timeElapsed > gameState.maxTime) {
            gameState.gameOver = true;
            typeWriter('\nGAME OVER! You ran out of time!\n');
        } else if (gameState.location === 'finish') {
            gameState.gameOver = true;
            typeWriter(`\nYou have completed the pub crawl in ${gameState.timeElapsed} minutes!\n`);
        } else {
            typeWriter(`\nYou moved ${direction} to ${newLocation.name} (${pathLength} minutes walk).\n${newLocation.description}\n`);
            
            if (newLocation.isPub) {
                gameState.waitingForTaskResponse = true;
            }
        }
    } else {
        typeWriter(`\nYou can't go ${direction} from here.\n`);
    }
}

function showNextQuestion() {
    const question = gameState.currentTaskQuestions[gameState.currentQuestionIndex];
    displayTaskImage(question.image, question.question, question.answers);

    if (Array.isArray(question.answers) && question.answers.length > 0) {
        let answersText = `\n${question.question}\n`;
        question.answers.forEach((answer, index) => {
            answersText += `${index + 1}. ${answer}\n`;
        });
        answersText += `\nEnter your answer (1-${question.answers.length}): `;
        gameState.currentQuestionMode = 'multiple';
        typeWriter(answersText);
    } else {
        const promptText = `\n${question.question}\n\nEnter your answer: `;
        gameState.currentQuestionMode = 'text';
        typeWriter(promptText);
    }
}

function handleCommand(command) {
    const raw = command.trim();
    const cmd = raw.toLowerCase();

    // If we're in the middle of answering task questions, handle answers
    if (gameState.inTask) {
        const currentQuestion = gameState.currentTaskQuestions[gameState.currentQuestionIndex];
        if (gameState.currentQuestionMode === 'multiple') {
            const answerIndex = parseInt(cmd) - 1;
            if (Number.isNaN(answerIndex) || !currentQuestion.answers || answerIndex < 0 || answerIndex >= currentQuestion.answers.length) {
                typeWriter(`\nPlease enter a valid answer number (1-${currentQuestion.answers ? currentQuestion.answers.length : 4}).\n`);
                return;
            }

            const selected = currentQuestion.answers[answerIndex];
            const correct = currentQuestion.correct;

            let isCorrect = false;
            if (typeof correct === 'number') {
                isCorrect = answerIndex === correct;
            } else if (typeof correct === 'string') {
                isCorrect = selected && selected.toLowerCase() === correct.toLowerCase();
            } else if (Array.isArray(correct)) {
                isCorrect = correct.map(c => c.toLowerCase()).includes(selected.toLowerCase());
            }

            if (isCorrect) {
                gameState.tasksCompleted++;
                typeWriter(`\nCorrect! (${gameState.tasksCompleted}/${gameState.totalTasksInPub})\n`);
            } else {
                const correctLabel = (typeof correct === 'number' && currentQuestion.answers) ? currentQuestion.answers[correct] : (Array.isArray(correct) ? correct[0] : (typeof correct === 'string' ? correct : 'N/A'));
                typeWriter(`\nWrong! The correct answer was: ${correctLabel}\n`);
            }
        } else {
            const correct = currentQuestion.correct;
            let matched = false;

            const numericInput = parseInt(raw);
            if (!Number.isNaN(numericInput) && typeof correct === 'number') {
                matched = (numericInput - 1) === correct;
            } else if (typeof correct === 'string') {
                matched = raw.toLowerCase() === correct.toLowerCase();
            } else if (Array.isArray(correct)) {
                matched = correct.map(c => c.toLowerCase()).includes(raw.toLowerCase());
            } else if (typeof correct === 'number' && currentQuestion.answers && currentQuestion.answers[correct]) {
                matched = raw.toLowerCase() === currentQuestion.answers[correct].toLowerCase();
            }

            if (matched) {
                gameState.tasksCompleted++;
                typeWriter(`\nCorrect! (${gameState.tasksCompleted}/${gameState.totalTasksInPub})\n`);
            } else {
                let correctText = '';
                if (typeof correct === 'string') correctText = correct;
                else if (Array.isArray(correct)) correctText = correct[0];
                else if (typeof correct === 'number' && currentQuestion.answers) correctText = currentQuestion.answers[correct];
                typeWriter(`\nWrong! The correct answer was: ${correctText}\n`);
            }
        }

        gameState.currentQuestionIndex++;

        if (gameState.currentQuestionIndex < gameState.currentTaskQuestions.length) {
            setTimeout(() => showNextQuestion(), 1500);
        } else {
            setTimeout(() => {
                typeWriter(`\nTask completed! You answered ${gameState.tasksCompleted}/${gameState.totalTasksInPub} correctly. Let's continue!\n\nAvailable commands:\n- up, down, left, right: Move in that direction\n- time: Check remaining time\n`);
                gameState.inTask = false;
                gameState.currentQuestionMode = null;
                gameState.tasksCompleted = 0;
                drawMap();
            }, 1500);
        }
        return;
    }

    // If we're in the viewing phase of shorttermmemory, only accept 'next'
    if (gameState.memory && gameState.memory.viewing) {
        if (cmd === 'next') {
            // advance to next item
            gameState.memory.currentIndex++;
            // If there are more items, show next; otherwise finalize viewing
            showNextMemoryItem();
        } else {
            typeWriter("\nViewing objects: type 'next' to see the next object.\n");
        }
        return;
    }

    if (gameState.waitingForTaskResponse) {
        if (cmd === "yes") {
            // If at Pub Acropolis, run shorttermmemory integration
            if (gameState.location === 'pub_tropico') {
                startShortTermMemoryTask();
            } else {
                gameState.waitingForTaskResponse = false;
                const currentLocation = locations[gameState.location];
                gameState.currentTaskQuestions = getRandomTasks(currentLocation.tasks, 5);
                gameState.currentQuestionIndex = 0;
                gameState.tasksCompleted = 0;
                gameState.inTask = true;
                showNextQuestion();
            }
        } else if (cmd === "no") {
            gameState.waitingForTaskResponse = false;
            typeWriter("\nYou decided not to do the task. You can continue exploring.\n");
        } else {
            typeWriter("\nPlease answer 'yes' or 'no'.\n");
        }
        return;
    }

    switch (cmd) {
        case "look":
            const currentLocation = locations[gameState.location];
            typeWriter(`\n${currentLocation.description}\n`);
            break;
        case "location":
            typeWriter(`\nYou are at: ${locations[gameState.location].name}\n`);
            break;
        case "time":
            const timeRemaining = gameState.maxTime - gameState.timeElapsed;
            typeWriter(`\nTime remaining: ${timeRemaining} minutes\n`);
            break;
        case "up":
        case "down":
        case "left":
        case "right":
            movePlayer(cmd);
            break;
        default:
            typeWriter("\nAvailable commands:\n- up, down, left, right: Move in that direction\n- time: Check remaining time\n");
            break;
    }
}

window.onload = initializeGame;
