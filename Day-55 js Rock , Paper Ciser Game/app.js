const playerScoreEl = document.getElementById("player_score");
const computerScoreEl = document.getElementById("computer_score");
const buttons = document.querySelectorAll(".btn");
const scoreBoard = document.querySelector(".score_board");
const winnerMessage = scoreBoard.querySelector("h2");
const options = ["rock", "paper", "scissor"];

let playerScore = 0;
let computerScore = 0;

// Function to generate computer choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "draw";
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissor" && computerChoice === "paper")
    ) {
        return "player";
    }
    return "computer";
}

// Function to update the scoreboard
function updateScoreboard(winner, playerChoice, computerChoice) {
    if (winner === "player") {
        playerScore++;
        scoreBoard.style.backgroundColor = "#1dd1a1"; // Green background for player win
        winnerMessage.textContent = `Player wins this round! ${playerChoice} beats ${computerChoice}`;
    } else if (winner === "computer") {
        computerScore++;
        scoreBoard.style.backgroundColor = "#ee5253"; // Red background for computer win
        winnerMessage.textContent = `Computer wins this round! ${computerChoice} beats ${playerChoice}`;
    } else {
        scoreBoard.style.backgroundColor = "#fff"; // Neutral background for draw
        winnerMessage.textContent = `It's a draw! Both chose ${playerChoice}`;
    }

    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;

    if (playerScore === 10) {
        scoreBoard.style.backgroundColor = "#1dd1a1";
        
        winnerMessage.textContent = "Congratulations! Player wins the game!";
    } else if (computerScore === 10) {
        scoreBoard.style.backgroundColor = "#ee5253";
        winnerMessage.textContent = "Computer wins the game! Better luck next time!";
    }
}

// Function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    scoreBoard.style.backgroundColor = "#fff";
    winnerMessage.textContent = "Choose Rock, Paper, or Scissor to start the game.";
}

// Event listeners for buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (playerScore < 10 && computerScore < 10) {
            const playerChoice = button.id;
            const computerChoice = getComputerChoice();

            const winner = determineWinner(playerChoice, computerChoice);
            updateScoreboard(winner, playerChoice, computerChoice);
        }
    });
});