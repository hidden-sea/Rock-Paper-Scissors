"use strict";
const choices = ["rock", "paper", "scissors"];
let computerScore;
let playerScore;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

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
});

paper.addEventListener("click", function () {
  playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", function () {
  playRound("scissors", getComputerChoice());
});

const containers = document.querySelector(".containers"); //class have periods and ids have hashtags

const content = document.createElement("div");
content.classList.add("content");

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    content.textContent = "player wins; rock beats scissor";
    containers.appendChild(content);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    content.textContent = "computer wins; paper beats rock";
    containers.appendChild(content);
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    content.textContent = "computer wins; rock beats scissor";
    containers.appendChild(content);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    content.textContent = "player wins.scissor beats paper";
    containers.appendChild(content);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    content.textContent = "player wins. paper beats rock";
    containers.appendChild(content);
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    content.textContent = "computer wins. scissor beats paper";
    containers.appendChild(content);
  } else {
    content.textContent = "its a draw";
    containers.appendChild(content);
  }
}

/*const playerSelection = ["rock", "paper", "scissors"];
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));*/
const scores = document.createElement("div");
scores.classList.add("scores");

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
  scores.textContent = "computer is the winner";
  scores.textContent = computerScore;
} else if (computerScore < playerScore) {
  scores.textContent = "player is the winner";
  scores.textContent = playerScore;
} else scores.textContent = "everyone's a winner"; //make sure to delete parenthesis so js know its not a function
containers.appendChild(scores);
