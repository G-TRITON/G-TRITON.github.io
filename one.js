let UserScore = 0;
let CompScore = 0;
const user = document.getElementById("user-score");
const comp = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");
const smallUser = "you ".fontsize(3).sub();
const smallComp = "computer ".fontsize(3).sub();

function main() {
  rock.addEventListener("click", function () {
    game("r");
  });
  paper.addEventListener("click", function () {
    game("p");
  });
  scissors.addEventListener("click", function () {
    game("s");
  });
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);

      break;
  }
}

function convert(ch) {
  if (ch === "p") return "Paper";
  if (ch === "s") return "Scissors";
  if (ch === "r") return "Rock";
}

function win(userChoice, computerChoice) {
  UserScore++;
  user.innerHTML = UserScore;
  result.innerHTML = `${convert(userChoice)}${smallUser} beats ${convert(
    computerChoice
  )}${smallComp} your point!`;
  document.getElementById(userChoice).classList.add("win-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("win-glow");
  }, 700);
  if (UserScore === 5) {
    alert("You Win!");
    UserScore -= UserScore;
    CompScore -= CompScore;
    user.innerHTML = UserScore;
    comp.innerHTML = CompScore;
    result.innerHTML = "Let's play again!";
  }
}

function lose(userChoice, computerChoice) {
  CompScore++;
  comp.innerHTML = CompScore;
  result.innerHTML = `${convert(computerChoice)}${smallComp} beats ${convert(
    userChoice
  )}${smallUser} computer's point!`;
  document.getElementById(userChoice).classList.add("lose-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("lose-glow");
  }, 700);
  if (CompScore === 5) {
    alert("You lost!");
    UserScore -= UserScore;
    CompScore -= CompScore;
    user.innerHTML = UserScore;
    comp.innerHTML = CompScore;
    result.innerHTML = "Let's play again!";
  }
}

function draw(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    result.innerHTML = "It's a draw !";
    document.getElementById(userChoice).classList.add("draw-glow");
    setTimeout(function () {
      document.getElementById(userChoice).classList.remove("draw-glow");
    }, 700);
    if (UserScore === 5 && CompScore === 7) {
      alert("Draw!");
      result.innerHTML = "Continued!";
    }
  }
}

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}
/*
function end(UserScore, CompScore){
if (UserScore===10){
  alert("You Win!");
  UserScore = 0;
  CompScore = 0;
  user.innerHTML = 0;
  comp.innerHTML = 0;
  result.innerHTML = "Let's Play!";
}
else if (CompScore===10){
  alert("You lost!");
  UserScore = 0;
  CompScore = 0;
  user.innerHTML = 0;
  comp.innerHTML = 0;
    result.innerHTML = "Let's Play!";
}
else if (UserScore===10 && CompScore===10)
{
  alert("Draw! Try Again.")
  user.innerHTML = UserScore;
  comp.innerHTML = CompScore;
    result.innerHTML = "Let's Play!";
}
}
*/
main();
getComputerChoice();
