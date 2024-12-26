let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timerInterval;
let isRunning = false;

const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const millisecondsElement = document.querySelector('.miliseconds');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(function () {
            milliseconds++;
            
            if (milliseconds >= 100) {
                milliseconds = 0;
                seconds++;
            }
            
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }

            updateDisplay();
        }, 10); // Update every 10 milliseconds
    }
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);
    }
}

function resetTimer() {
    isRunning = false;
    clearInterval(timerInterval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
}

function updateDisplay() {
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
    millisecondsElement.textContent = formatTime(milliseconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

// Event Listeners for buttons
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
