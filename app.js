const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
    // return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// default value for parameters are assigned only if it passed an undefined
// argument. Other falsy value will be used instead.
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

// if (cChoice === pChoice) {
//   return RESULT_DRAW;
// } else if (
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return RESULT_PLAYER_WINS;
// } else {
//   return RESULT_COMPUTER_WINS;
// }
// }

// Be carefull of memory leaks! In this case just 1 ev.listener so no problem
startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  let message = `You picked ${
    playerChoice || DEFAULT_USER_CHOICE
  }, computer picked ${computerChoice}, so it is a `;
  if (winner === RESULT_DRAW) {
    message += "draw.";
  } else if (winner === RESULT_PLAYER_WINS) {
    message += "win.";
  } else {
    message += "loss.";
  }
  alert(message);
  gameIsRunning = false;
});

// not related to the game

const sumUp = (numbers) => {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
};

console.log(sumUp([1, 5, 10, -3, 6, 10]));

// must be the last paramater, can only one rest parameter. a, b are excluded from the calculation
// in a normal function, not arrow, we remove all parameters and use (const number of arguments) in the for-of loop
// const sumUpRestParameter = (a, b, ...numbers) => {

const sumUpRestParameter = (resultHandler, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const number of numbers) {
    // const number of arguments (for a normal function)
    sum += validateNumber(number);
  }
  resultHandler(sum);
};

const showResult = (messageText, result) => {
  alert(messageText + " " + result);
};

sumUpRestParameter(showResult.bind(this, "The result after summing is: "), 1, 5, 10, -3, 6, 10, 25, 88);

const substractUp = function (resultHandler, ...numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum -= num;
  }
  resultHandler(sum);
};

substractUp(
  showResult.bind(this, "The result after subtracting is: "),
  1,
  10,
  15,
  20
);

/* *****************************************************************************************************
// const getWinner = (cChoice, pChoice = cChoice === 'ROCK' ? PAPER : DEFAULT_USER_CHOICE) =>

const add = a, b => a + b;

const add2 = function(a, b) {
  return a + b;
}

// console.log(typeof startGame); // calling it will print the type of what is returned, without the () we see the type "function"
// console.dir(startGame);

// const start = function () {
//   console.log("Game is starting..."); 
// };

// startGameBtn.addEventListener("click", start);

// startGameBtn.addEventListener("click", function startGame(){ // Be carefull of memory leaks! In this case just 1 ev.listener so no problem
//   console.log("Game is loading...", age); // naming the anonymous function will make it easy to spot if it produces errors.
// });

// METHODS:

// const person = {
//   name: 'Max', // property
//   greet: function greet() { // a function inside an object is a method
//     console.log('Hi max!');
//   }
// }

// person.greet();

*/
