const userChoiceDisplay = document.getElementById("userChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");
const finalResult = document.getElementById("finalResult");
const winner = document.getElementById("winner");
let body = document.getElementById("body");

let computerChoice = "";
let result = "";
let draw = 0;
let win = 0;
let lost = 0;

const userInput = (choice) => {
  userChoiceDisplay.innerHTML = choice;
  computerInput();
};

const computerInput = () => {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else if (randomNumber === 3) {
    computerChoice = "scissors";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
  getResult();
};

const getResult = () => {
  const userChoice = userChoiceDisplay.innerHTML;

  if (computerChoice === userChoice) {
    result = "draw";
    body.style.backgroundColor = "yellow";

    draw++;
  } else if (
    (computerChoice === "rock" && userChoice === "paper") ||
    (computerChoice === "paper" && userChoice === "scissors") ||
    (computerChoice === "scissors" && userChoice === "rock")
  ) {
    result = "win";
    body.style.backgroundColor = "green";
    0;
    win++;
  } else if (
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "scissors" && userChoice === "paper")
  ) {
    result = "lost";
    body.style.backgroundColor = "red";
    lost++;
  }

  console.log(result);
  winner.innerHTML = result;

  finalResult.innerHTML = `win:${win} lost:${lost} draw:${draw}`;

  setTimeout(() => {
    let con = confirm("do you wanna continue");
    if (!con) {
      window.close();
      alert(`win:${win} lost:${lost} draw:${draw}`);
    } else {
      alert(`win:${win} lost:${lost} draw:${draw}`);
    }
  }, 1500);
};

const reset = () => {
  userChoiceDisplay.innerHTML = "";
  computerChoiceDisplay.innerHTML = "";
  winner.innerHTML = "";
  body.style.backgroundColor = "";
  draw = 0;
  win = 0;
  lost = 0;
  finalResult.innerHTML = `win:${win} lost:${lost} draw:${draw}`;
};
