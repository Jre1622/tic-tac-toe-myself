let boxes = Array.from(document.querySelectorAll(".container-boxes"));
let turn = 0;
let gameOver = false;

// Winning combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Select score elements
let userScoreElement = document.querySelector(".user-score span");
let botScoreElement = document.querySelector(".bot-score span");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (!gameOver && box.innerHTML.trim() == "") {
      box.innerHTML = turn % 2 === 0 ? "X" : "O";
      turn++;
      if (checkWin()) {
        console.log("We have a winner!");
        gameOver = true;
        // Update scores
        if (turn % 2 === 0) {
          botScoreElement.textContent = parseInt(botScoreElement.textContent) + 1;
        } else {
          userScoreElement.textContent = parseInt(userScoreElement.textContent) + 1;
        }
      }
    }
  });
});

let resetButton = document.getElementById("game-reset");

resetButton.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerHTML = "";
  });
  turn = 0; // Reset the turn counter
  gameOver = false; // Reset the game status
});

function checkWin() {
  return winningCombinations.some((combination) => combination.every((index) => boxes[index].innerHTML === "X") || combination.every((index) => boxes[index].innerHTML === "O"));
}

// HANDLE BACKGROUND MUSIC
// Select the audio element
let audioElement = document.getElementById("background-music");

// Select the toggle button and the image inside it
let toggleButton = document.querySelector(".toggle-button");
let imageElement = toggleButton.querySelector("img");

// Toggle the audio
function toggleAudio() {
  if (audioElement.paused) {
    audioElement.play();
    imageElement.src = "./volume_up_FILL0_wght400_GRAD0_opsz24.png"; // Change to the image for playing
  } else {
    audioElement.pause();
    imageElement.src = "./volume mute.png"; // Change to the image for paused
  }
}

toggleButton.addEventListener("click", toggleAudio);
