"use strict";
const field = document.querySelectorAll(".field");
const player = document.querySelector(".turn");
const resetBtn = document.querySelector(".reset-btn");
console.log(field);

// switching player o => x ; x=>o
const switchPlayer = (fieldIndex) => {
  turn === "x" ? (turn = "o") : (turn = "x");
  player.textContent = `player ${turn}`;
};

// check if someone won
const checkWinner = () => {
  const checkSum = (sum) => {
    if (sum === 2) {
      isRunning = false;
      console.log(`${turn} won!`);
    }
  };
  // draw check
  let draw = 0;
  for (let i = 0; i < field.length; i++) {
    if (field[i].classList.contains("x") || field[i].classList.contains("o")) {
      draw++;
    }
  }
  if (draw === 9) {
    console.log("draw");

    return -1;
  }
  // horizontal check
  for (const [index, values] of points.entries()) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
      if (values[i] === values[i + 1]) sum++;
    }
    checkSum(sum);
  }
  // vertical check
  for (let i = 0; i < 3; i++) {
    let sum = 0;
    for (let j = 0; j < 2; j++) {
      if (points[j][i] === points[j + 1][i]) sum++;
    }
    checkSum(sum);
  }
  // diagonally check
  if (
    (points[0][0] === points[1][1] && points[1][1] === points[2][2]) ||
    (points[0][2] === points[1][1] && points[1][1] === points[2][0])
  ) {
    isRunning = false;
    console.log(`${turn} won!`);
  }
};

const init = function () {
  turn = "x";
  isRunning = true;
  points = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  for (let i = 0; i < field.length; i++) {
    field[i].classList.remove("x");
    field[i].classList.remove("o");
  }
  console.log(points);
};
// initialization
let points = [];
let turn, isRunning;
init();
// click mech
for (let i = 0; i < field.length; i++) {
  field[i].addEventListener("click", () => {
    if (isRunning) {
      for (let k = 0; k < 3; k++) {
        for (let j = 0; j < 3; j++) {
          if (points[k][j] === i) {
            points[k][j] = `${turn}`;
            field[i].classList.add(`${turn}`);
            checkWinner();
            switchPlayer();
          }
        }
      }
    }
  });
}

resetBtn.addEventListener("click", init);
