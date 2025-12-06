// Logic functions for Askar's Pub Crawl game
// Add game logic here as needed

const items = [
  { text: 'Red circle' },
  { text: 'Riia street 10' },
  { text: 'Yellow sweater' },
  { text: 'The airplane left from terminal D' },
  { text: 'Apple' },
  { text: 'John had brown hair' },
  { text: 'Rabbit' },
  { text: 'Take the second exit on the roundabout and then turn left.' },
  { text: 'Green square' },
  { text: '0451' }
];

const questions = [
  {
    q: 'What color was the circle?',
    choices: ['Red', 'Green', 'Blue', 'Yellow'],
    answer: 0,
    image: 'question1.jpg'
  },
  {
    q: "What was the street's name?",
    choices: ['Riia', 'Rapla', 'Tallinna', 'Rakvere'],
    answer: 0,
    image: 'question2.jpg'
  },
  {
    q: 'What clothing was there?',
    choices: ['Sweater', 'Shoes', 'Necklace', 'Jeans'],
    answer: 0,
    image: 'question3.jpg'
  },
  {
    q: 'From which terminal did the plane leave?',
    choices: ['A', 'B', 'C', 'D'],
    answer: 3,
    image: 'question4.jpg'
  },
  {
    q: 'What was the fruit?',
    choices: ['Apple', 'Orange', 'Banana', 'Grapes'],
    answer: 0,
    image: 'question5.jpg'
  },
  {
    q: "What color was John's hair?",
    choices: ['Brown', 'Blonde', 'Black', 'Gray'],
    answer: 0,
    image: 'question6.jpg'
  },
  {
    q: 'What was the animal?',
    choices: ['Rabbit', 'Horse', 'Dog', 'Cow'],
    answer: 0,
    image: 'question7.jpg'
  },
  {
    q: 'Which exit from the roundabout did you have to take?',
    choices: ['First', 'Second', 'Third', 'Fourth'],
    answer: 1,
    image: 'question8.jpg'
  },
  {
    q: 'What color was the square?',
    choices: ['Red', 'Green', 'Blue', 'Yellow'],
    answer: 1,
    image: 'question9.jpg'
  },
  {
    q: 'What was the number?',
    choices: ['0451', '1450', '5041', '5041'],
    answer: 0,
    image: 'question10.jpg'
  }
];

let currentIndex = -1;
let showingQuestions = false;
let userAnswers = [];
let warningShown = false;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let shuffledQuestions = [];

let viewStartTime = null;
let viewTotalTime = 0;
let questionStartTime = null;
let questionTotalTime = 0;

function showNextItem() {
  const memoryItem = document.getElementById('memory-item');
  const nextBtn = document.getElementById('next-btn');

  if (!showingQuestions) {
    if (viewStartTime === null) viewStartTime = Date.now();
    currentIndex++;
    warningShown = false;
    if (currentIndex < items.length) {
      // Show image if present for this item (by question index)
      let html = '';
      const q = questions[currentIndex];
      if (q && q.image) {
        const imgPath = `images/${q.image}`;
        html += `<img src='${imgPath}' alt='item image' style='max-width:200px;max-height:200px;display:block;margin:0 auto 20px auto;' onerror="this.style.display='none'" />`;
      }
      html += `<div>${items[currentIndex].text}</div>`;
      memoryItem.innerHTML = html;
      nextBtn.textContent = currentIndex === items.length - 1 ? "Start Questions" : "Next";
    } else {
      // End of viewing phase
      viewTotalTime = Math.round((Date.now() - viewStartTime) / 1000);
      viewStartTime = null;
      showingQuestions = true;
      currentIndex = 0;
      // Shuffle questions before starting
      shuffledQuestions = questions.map((q, idx) => ({...q, origIndex: idx}));
      shuffleArray(shuffledQuestions);
      questionStartTime = Date.now();
      showQuestion();
    }
  } else {
    const selected = document.querySelector('input[name="choice"]:checked');
    if (!selected && !warningShown) {
      alert('Please select an answer.');
      warningShown = true;
      return;
    }
    if (selected) {
      warningShown = false;
      userAnswers.push(parseInt(selected.value));
      currentIndex++;
      if (currentIndex < shuffledQuestions.length) {
        showQuestion();
      } else {
        // End of question phase
        questionTotalTime = Math.round((Date.now() - questionStartTime) / 1000);
        questionStartTime = null;
        showResults();
      }
      return;
    }
    if (!selected && warningShown) {
      warningShown = false;
      userAnswers.push(-1);
      currentIndex++;
      if (currentIndex < shuffledQuestions.length) {
        showQuestion();
      } else {
        // End of question phase
        questionTotalTime = Math.round((Date.now() - questionStartTime) / 1000);
        questionStartTime = null;
        showResults();
      }
    }
  }
}

function showQuestion() {
  const memoryItem = document.getElementById('memory-item');
  const nextBtn = document.getElementById('next-btn');
  const q = shuffledQuestions[currentIndex];
  let html = `<div style='margin-bottom:20px;font-size:1.3rem;'>${q.q}</div>`;
  html += getChoicesHtml(q);
  memoryItem.innerHTML = html;
  nextBtn.textContent = currentIndex === shuffledQuestions.length - 1 ? "Finish" : "Next Question";
  warningShown = false;
}

function getChoicesHtml(q) {
  return q.choices.map((choice, i) => `<label style='display:block;margin-bottom:10px;'><input type='radio' name='choice' value='${i}'> ${choice}</label>`).join('');
}

function showResults() {
  const memoryItem = document.getElementById('memory-item');
  const nextBtn = document.getElementById('next-btn');
  let score = 0;
  userAnswers.forEach((ans, i) => {
    if (ans === shuffledQuestions[i].answer) score++;
  });
  memoryItem.innerHTML = `<div style='font-size:1.5rem;'>Test complete!<br>Your score: ${score} / ${shuffledQuestions.length}</div><div style='margin-top:18px;font-size:1.1rem;'>Time spent viewing objects: <b>${viewTotalTime}</b> seconds<br>Time spent answering questions: <b>${questionTotalTime}</b> seconds</div>`;
  nextBtn.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
  const nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', showNextItem);
});

// Example placeholder function
function initGame() {
  // Initialization logic will go here
}

// Export functions if using modules
// export { initGame };
