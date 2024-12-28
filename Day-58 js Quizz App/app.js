const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');
const startButton = document.getElementById('start-btn');
const resultContainer = document.getElementById('result-container');
const scoreBoard = document.getElementById('score-board');

let shuffledQuestions, currentQuestionIndex;
let score = 0;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
prevButton.addEventListener('click', () => {
    currentQuestionIndex--;
    setNextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion();
    score = 0;
    scoreBoard.innerHTML = `<h2>Score: 0/${questions.length}</h2>`; 
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    if (shuffledQuestions.length - 1 === currentQuestionIndex) {
        nextButton.classList.add('hide');
    } else {
        nextButton.classList.remove('hide');
    }

    if (currentQuestionIndex === 0) {
        prevButton.classList.add('hide');
    } else {
        prevButton.classList.remove('hide');
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    Array.from(answerButtons.children).forEach(button => { 
        if (button.dataset.correct === 'true') {
            button.classList.add('correct'); 
        } else {
            button.classList.add('incorrect'); 
        }
    });

    if (correct) {
        selectedButton.classList.add('correct'); 
        score++;
        scoreBoard.innerHTML = `<h2>Score: ${score}/${questions.length}</h2>`;
    } else {
        selectedButton.classList.add('incorrect'); 
    }

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        showResults();
    }
}

function showResults() {
    questionContainer.classList.add('hide');
    nextButton.classList.add('hide');
    prevButton.classList.add('hide');
    resultContainer.innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2>`;
    resultContainer.classList.remove('hide');
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

function clearStatusClass(element) {
    Array.from(answerButtons.children).forEach(button => { 
        button.classList.remove('correct');
        button.classList.remove('incorrect');
    });
}

const questions = [
    {
        question: "What is the national flower of Bangladesh?",
        answers: [
            { text: 'Rose', correct: false },
            { text: 'Lily', correct: false },
            { text: 'Water Lily', correct: true },
            { text: 'Sunflower', correct: false }
        ]
    },
    {
        question: "When did Bangladesh gain independence?",
        answers: [
            { text: '1947', correct: false },
            { text: '1952', correct: false },
            { text: '1971', correct: true },
            { text: '1990', correct: false }
        ]
    },
    {
        question: "What is the capital of Bangladesh?",
        answers: [
            { text: 'Chittagong', correct: false },
            { text: 'Dhaka', correct: true },
            { text: 'Khulna', correct: false },
            { text: 'Rajshahi', correct: false }
        ]
    },
    {
        question: "Which river flows through Bangladesh?",
        answers: [
            { text: 'Nile', correct: false },
            { text: 'Amazon', correct: false },
            { text: 'Ganges', correct: true },
            { text: 'Volga', correct: false }
        ]
    }
];