"use strict";
const choices = ["rock", "paper", "scissors"];
let computerScore;
let playerScore;
playerScore = 0;
computerScore = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const outcome = document.querySelector(".outcome");
const outcome1 = document.querySelector(".outcome1");
const content1 = document.createElement("div");
const content2 = document.createElement("div");

//remember to place in hashtags in the parenthesis

//define variablies in global scope if they are listed in more than one function

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}
//calling a function, use extra parenthsis so it will return value and not print itself
//console.log(getComputerChoice());
/*function getPlayerChoice() {
  return prompt("What will you choose?").toLowerCase();
}*/

rock.addEventListener("click", function () {
  //2 functions within a function
  playRound("rock", getComputerChoice());
  content1.textContent = playerScore;
  content2.textContent = computerScore;
  outcome.appendChild(content1);
  outcome1.appendChild(content2);
  checkWinner(playerScore, computerScore);
});

paper.addEventListener("click", function () {
  playRound("paper", getComputerChoice());
  content1.textContent = playerScore;
  content2.textContent = computerScore;
  outcome.appendChild(content1);
  outcome1.appendChild(content2);
  checkWinner(playerScore, computerScore);
});

scissors.addEventListener("click", function () {
  playRound("scissors", getComputerChoice());
  content1.textContent = playerScore;
  content2.textContent = computerScore;
  outcome.appendChild(content1);
  outcome1.appendChild(content2);
  checkWinner(playerScore, computerScore);
});

const containers = document.querySelector(".containers"); //class have periods and ids have hashtags

const content = document.createElement("div");
content.classList.add("content");
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    content.textContent = "Player wins! Rock beats scissor.";
    containers.appendChild(content);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    content.textContent = "Computer wins! Paper beats rock.";
    containers.appendChild(content);
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    content.textContent = "Computer wins! Rock beats scissor.";
    containers.appendChild(content);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    content.textContent = "Player wins! Scissor beats paper.";
    containers.appendChild(content);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    content.textContent = "Player wins! Paper beats rock.";
    containers.appendChild(content);
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    content.textContent = "Computer wins! Scissor beats paper.";
    containers.appendChild(content);
  } else {
    content.textContent = "It's a draw.";
    containers.appendChild(content);
  }
}
function checkWinner(playerScore, computerScore) {
  if (playerScore === 5) {
    content.textContent = "You Win!";
    containers.appendChild(content);
    //result_p.innerHTML = "You win>";
  } else if (computerScore === 5) {
    content.textContent = "You lose!";
    containers.appendChild(content);
  }
}

/*const playerSelection = ["rock", "paper", "scissors"];
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game() {
  playerScore = 0;
  computerScore = 0;
  for (let i = 0; i <= 5; i++) {
    const playerSelection = ["rock", "paper", "scissors"];
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerScore, computerScore);
  }
}
//make sure to define the two parameters in playround() or the parameters will default to undefined
console.log(game(5));
if (playerScore < computerScore) {
  console.log("computer is the winner");
  computerScore;
} else if (computerScore < playerScore) {
  console.log("player is the winner");
  playerScore;
} else console.log("everyone's a winner");
//make sure to delete parenthesis so js know its not a function*/
