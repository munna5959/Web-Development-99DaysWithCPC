
let rendomNum = Math.floor(Math.random() * 20 + 1);
let guessNum = (document.getElementById("guess").textContent = rendomNum);


let rightMessage = document.querySelector(".message");
let wrongMessage = document.querySelector(".message");


let winImage = document.getElementById("win");


let hidingImage = document.getElementById("hide");

let resetBtn = document
  .querySelector("#again")
  .addEventListener("click", () => {
    location.reload();
  });


let finalResult = document.getElementById("score");
let initialScore = 0;


let inputBtn = document.getElementById("input");
let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", () => {

  initialScore++;
  finalResult.textContent = initialScore;

  let guessOutput = inputBtn.value;
  if (guessOutput == guessNum) {
    rightMessage.textContent = "🎉 Correct Number";
    winImage.style.display = "block";
  } else if (guessOutput < guessNum) {
    wrongMessage.textContent = "😒 Its Low Number";
    winImage.style.display = "none";
    hidingImage.style.backgroundImage = "url('img/low.png')";
  } else if (guessOutput > guessNum) {
    wrongMessage.textContent = "😎 Its High Number";
    winImage.style.display = "none";
    hidingImage.style.backgroundImage = "url('img/high.png')";
  }
});