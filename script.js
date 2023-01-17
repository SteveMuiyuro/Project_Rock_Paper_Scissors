let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("computer_score");
const scoreBoard_div = document.querySelector(".score_board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const button_censor = document.getElementById("btn");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function word(word) {
  if (word === "r") return "Rock";
  if (word === "s") return "Scissors";
  return "Paper";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${word(userChoice)} bits Computer's ${word(
    computerChoice
  )}, YOU WIN!!!!`;
  const newClass_div = document.getElementById(userChoice);
  newClass_div.classList.add("win_class");
  setTimeout(() => newClass_div.classList.remove("win_class"), 500);
  const result2 = document.getElementById("result_color");
  result2.classList.add("result_win");
  setTimeout(() => result2.classList.remove("result_win"), 500);
}

function loss(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `Computer's ${word(computerChoice)} bits ${word(
    userChoice
  )}, You Lose!!!!`;
  const newClass_div = document.getElementById(userChoice);
  newClass_div.classList.add("loss_class");
  setTimeout(() => newClass_div.classList.remove("loss_class"), 500);
  const result2 = document.getElementById("result_color");
  result2.classList.add("result_loss");
  setTimeout(() => result2.classList.remove("result_loss"), 500);
}

function draw(userChoice, computerChoice) {
  result_div.innerHTML = `It's a Draw!!`;
  const newClass_div = document.getElementById(userChoice);
  newClass_div.classList.add("draw_class");
  setTimeout(() => newClass_div.classList.remove("draw_class"), 500);
  const result2 = document.getElementById("result_color");
  result2.classList.add("result_draw");
  setTimeout(() => result2.classList.remove("result_draw"), 500);
}

function clear() {
  userScore_span.innerHTML = 0;
  computerScore_span.innerHTML = 0;
  computerScore = 0;
  userScore = 0;
  result_div.innerHTML = "Ready to Play?";
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "pr":
    case "sp":
    case "rs":
      win(userChoice, computerChoice);
      break;

    case "rp":
    case "ps":
    case "sr":
      loss(userChoice, computerChoice);
      break;

    case "rr":
    case "ss":
    case "pp":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => {
    game("r");
  });

  paper_div.addEventListener("click", () => {
    game("p");
  });

  scissors_div.addEventListener("click", () => {
    game("s");
  });

  button_censor.addEventListener("click", () => clear());
}

main();
