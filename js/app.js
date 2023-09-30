const dice = document.querySelector("img");
const score = [0, 0];
const player0Title = document.querySelector(".player-title0");
const player1Title = document.querySelector(".player-title1");
const currentTitle0 = document.querySelector(".current-title0");
const currentTitle1 = document.querySelector(".current-title1");
const player0El = document.querySelector(".player0");
const player1El = document.querySelector(".player1");
const currentScore0 = document.querySelector(".current-score0");
const currentScore1 = document.querySelector(".current-score1");
const totalScore0El = document.querySelector(".total0");
const totalScore1El = document.querySelector(".total1");

let winMessage = "🎉 Congratulations 🎉 You win!";

const btnRoll = document.querySelector(".roll");
const btnHold = document.querySelector(".hold");
const btnReset = document.querySelector(".reset");

const switchPlayer = function () {
  player0El.classList.toggle("active-player");
  player1El.classList.toggle("active-player");
  player0El.classList.toggle("deactive-player");
  player1El.classList.toggle("deactive-player");
};

let play = true;
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener("click", () => {
  if (play) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.src = `./images/dice${diceNumber}.png`;
    dice.classList.remove("hidden");
    if (score[0] <= 30 && score[1] <= 30) {
      if (activePlayer === 0) {
        currentScore += diceNumber;
        currentScore0.textContent = currentScore;
        if (diceNumber === 1) {
          currentScore = 0;
          activePlayer = 1;
          currentScore0.textContent = 0;
          switchPlayer();
        }
      } else {
        currentScore += diceNumber;
        currentScore1.textContent = currentScore;
        if (diceNumber === 1) {
          currentScore = 0;
          activePlayer = 0;
          currentScore1.textContent = 0;
          switchPlayer();
        }
      }
    } else {
      play = false;
      dice.classList.add("hidden");
      if (score[0] >= 30) {
        player0Title.textContent = winMessage;
        switchPlayer();
      } else if (score[1] >= 30) {
        player1Title.textContent = winMessage;
        switchPlayer();
      }
    }
  }
});
function Finish() {
  play = false;
  dice.classList.add("hidden");
  if (score[0] >= 30) {
    player0Title.textContent = winMessage;
    switchPlayer();
  } else if (score[1] >= 30) {
    player1Title.textContent = winMessage;
    switchPlayer();
  }
}
btnHold.addEventListener("click", () => {
  if (play) {
    if (score[0] <= 30 && score[1] <= 30) {
      if (activePlayer === 0) {
        score[0] += currentScore;
        totalScore0El.textContent = score[0];
        activePlayer = 1;
        currentScore0.textContent = 0;
        currentScore = 0;
        switchPlayer();
      } else {
        score[1] += currentScore;
        totalScore1El.textContent = score[1];
        activePlayer = 0;
        currentScore1.textContent = 0;
        currentScore = 0;
        switchPlayer();
      }
      if (score[0] >= 30) {
        Finish();
        setTimeout(function () {
          alert("🎉 Congratulations 🎉 player one is winner!");
        }, 1000);
      }
      if (score[1] >= 30) {
        Finish();

        setTimeout(function () {
          alert("🎉 Congratulations 🎉 player two is winner!");
        }, 1000);
      }
    }
  } else {
  }
});

btnReset.addEventListener("click", () => {
  play = true;
  activePlayer = 0;
  currentScore = 0;
  score[0] = score[1] = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  totalScore0El.textContent = 0;
  totalScore1El.textContent = 0;
  player0Title.textContent = "Player 1";
  player1Title.textContent = "Player 2";
  player0El.classList.add("active-player");
  player0El.classList.remove("deactive-player");
  player1El.classList.add("deactive-player");
  player1El.classList.remove("active-player");
  dice.classList.add("hidden");
});
