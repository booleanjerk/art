let currentStreak = 0;
let revealedChars = new Set();
let revealedCount = 0;
let currentArt = null;
let shuffledQuestions = [];
let questionIndex = 0;
let totalQuestionsAnswered = 0;
const discoveredNames = new Set();

shuffleQuestions();
updateStreakDisplay();
renderQuestion();

function shuffleQuestions() {
  shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
  questionIndex = 0;
}

function getNextQuestion() {
  if (questionIndex >= shuffledQuestions.length) {
    shuffleQuestions();
  }
  return shuffledQuestions[questionIndex++];
}

function updateStreakDisplay() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('filled', i < currentStreak);
  });
}

function renderQuestion() {
  const q = getNextQuestion();
  const questionElem = document.getElementById('question');
  const optionsElem = document.getElementById('options');

  questionElem.innerHTML = q.text.replace(/\n/g, '<br>');
  optionsElem.innerHTML = '';

  const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);

  shuffledOptions.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = () => {
      if (index === shuffledOptions.indexOf(q.options[q.answerIndex])) {
        currentStreak++;
        if (currentStreak === 5) {
          totalQuestionsAnswered += 5;
          currentStreak = 0;
          revealAsciiCharacter();
          return; // skip rerendering question now
        }
      } else {
        currentStreak = 0;
      }
      updateStreakDisplay();
      renderQuestion();
    };
    optionsElem.appendChild(btn);
  });
}

function revealAsciiCharacter() {
  if (!currentArt) {
    const available = asciiArtList.filter(a => !discoveredNames.has(a.name));
    if (available.length === 0) {
      alert("You've discovered all the artworks!");
      return;
    }
    currentArt = available[Math.floor(Math.random() * available.length)];
  }

  const text = currentArt.text;
  const chars = [...new Set(text.replace(/\s/g, '').split(''))].filter(c => !revealedChars.has(c));

  if (chars.length === 0) {
    document.getElementById('ascii-art').textContent = text;
    askForGuess();
    return;
  }

  const charToReveal = chars[Math.floor(Math.random() * chars.length)];
  revealedChars.add(charToReveal);
  revealedCount++;

  const masked = text.replace(/[^ \n]/g, c => revealedChars.has(c) ? c : ' ');
  document.getElementById('ascii-art').textContent = masked;

  scrollToAsciiArt();

  setTimeout(() => {
    askForGuess();
  }, 1500);
}

function scrollToAsciiArt() {
  const asciiFrame = document.getElementById('ascii-frame');
  asciiFrame.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function askForGuess() {
  const guess = prompt("What do you see?");
  if (!guess) {
    scrollToTop();
    return;
  }

  if (guess.trim().toLowerCase() === currentArt.name.toLowerCase()) {
    loadNewArtwork();
  } else {
    scrollToTop();
  }
}

function loadNewArtwork() {
  totalQuestionsAnswered += revealedCount;
  discoveredNames.add(currentArt.name);
  addToDiscoveredList(currentArt.name);

  revealedChars.clear();
  revealedCount = 0;

  const remainingArt = asciiArtList.filter(a => !discoveredNames.has(a.name));
  if (remainingArt.length === 0) {
    alert("You've discovered all the artworks!");
    return;
  }

  currentArt = remainingArt[Math.floor(Math.random() * remainingArt.length)];
  document.getElementById('ascii-art').textContent = '';

  updateStreakDisplay();
  renderQuestion();
}

function addToDiscoveredList(name) {
  const li = document.createElement('li');
  li.textContent = name;
  document.getElementById('discovered-artworks').appendChild(li);
}
