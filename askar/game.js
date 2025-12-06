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

function showNextItem() {
  const memoryItem = document.getElementById('memory-item');
  const nextBtn = document.getElementById('next-btn');

  if (!showingQuestions) {
    currentIndex++;
    warningShown = false;
    if (currentIndex < items.length) {
      memoryItem.textContent = items[currentIndex].text;
      nextBtn.textContent = currentIndex === items.length - 1 ? "Start Questions" : "Next";
    } else {
      showingQuestions = true;
      currentIndex = 0;
      showQuestion();
    }
  } else {
    const selected = document.querySelector('input[name="choice"]:checked');
    // Only show popup if no answer is chosen AND warning hasn't been shown yet
    if (!selected && !warningShown) {
      alert('Please select an answer.');
      warningShown = true;
      return;
    }
    // If an answer is chosen, proceed and reset warningShown
    if (selected) {
      warningShown = false;
      userAnswers.push(parseInt(selected.value));
      currentIndex++;
      if (currentIndex < questions.length) {
        showQuestion();
      } else {
        showResults();
      }
      return;
    }
    // If no answer and warning has already been shown, record as unanswered and move on
    if (!selected && warningShown) {
      warningShown = false;
      userAnswers.push(-1);
      currentIndex++;
      if (currentIndex < questions.length) {
        showQuestion();
      } else {
        showResults();
      }
    }
  }
}

function showQuestion() {
  const memoryItem = document.getElementById('memory-item');
  const nextBtn = document.getElementById('next-btn');
  const q = questions[currentIndex];
  let html = `<div style='margin-bottom:20px;font-size:1.3rem;'>${q.q}</div>`;
  // Check if image exists
  const imgPath = `images/${q.image}`;
  const img = new Image();
  img.src = imgPath;
  img.onload = function() {
    html = `<img src='${imgPath}' alt='question image' style='max-width:200px;max-height:200px;display:block;margin:0 auto 20px auto;' />` + html;
    html += getChoicesHtml(q);
    memoryItem.innerHTML = html;
  };
  img.onerror = function() {
    html += getChoicesHtml(q);
    memoryItem.innerHTML = html;
  };
  // If image is cached and loads instantly
  if (img.complete && img.naturalWidth !== 0) {
    html = `<img src='${imgPath}' alt='question image' style='max-width:200px;max-height:200px;display:block;margin:0 auto 20px auto;' />` + html;
    html += getChoicesHtml(q);
    memoryItem.innerHTML = html;
  }
  nextBtn.textContent = currentIndex === questions.length - 1 ? "Finish" : "Next Question";
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
    if (ans === questions[i].answer) score++;
  });
  memoryItem.innerHTML = `<div style='font-size:1.5rem;'>Test complete!<br>Your score: ${score} / ${questions.length}</div>`;
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
