"use strict";

const resetBtn = document.querySelector(".reset-btn");
const field = document.querySelectorAll(".field");
const playerLabel = document.querySelector(".turn");
const gameState = document.querySelector(".game-container");
const winnerLabel = document.querySelector(".winner");
const winnerHeader = document.querySelector(".winner-label");
const winsPosibility = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const init = function () {
  turn = "x";
  isRunning = true;
  for (let i = 0; i < 9; i++) positions[i] = "";
  field.forEach((e) => {
    e.classList.remove("x");
    e.classList.remove("o");
  });
  gameState.classList.remove("win");
};

const switchPlayer = function () {
  if (isRunning) {
    turn = turn === "x" ? (turn = "o") : (turn = "x");
    // playerLabel.textContent = `player ${turn}`;
  }
};

const checkWinner = function () {
  if (positions.indexOf("") === -1) {
    console.log("It's a draw!");
    winnerHeader.textContent = "Draw!";
    winnerLabel.textContent = "";
    gameState.classList.add("win");
    isRunning = false;
    return -1;
  }
  for (const [index, posibilities] of winsPosibility.entries()) {
    const [a, b, c] = posibilities;
    if (
      positions[a] === positions[b] &&
      positions[b] === positions[c] &&
      positions[a] !== "" &&
      positions[b] !== "" &&
      positions[c] !== ""
    ) {
      isRunning = false;
      console.log(`PLAYER ${turn} WON! 🎈!`);
      gameState.classList.add("win");
      winnerHeader.textContent = "Winner!";
      winnerLabel.textContent = turn;
      return -1;
    }
  }
};

// click mech
for (let i = 0; i < field.length; i++) {
  field[i].addEventListener("click", () => {
    // check if position is empty to avoid collisions and also check if the game isn't done
    if (positions[i] === "" && isRunning) {
      positions[i] = turn;
      field[i].classList.add(turn);
      checkWinner();
      switchPlayer();
    }
  });
}

// restart game mech
resetBtn.addEventListener("click", init);
//initialization
let turn, isRunning;
const positions = [];

init();
