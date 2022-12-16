"use strict";
const choices = ["rock", "paper", "scissor"];
let computerScore;
let playerScore;
//define variablies in gloabal scop if they are listed in more than one function

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}
//calling a function, use extra parenthsis so it will return value and not print itself
//console.log(getComputerChoice());

function getPlayerChoice() {
  return prompt("What will you choose?").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissor") {
    playerScore++;
    console.log("player wins; rock beats scissor");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    console.log("computer wins; paper beats rock");
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    computerScore++;
    console.log("computer wins; rock beats scissor");
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    playerScore++;
    console.log("player wins.scissor beats paper");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    console.log("player wins. paper beats rock");
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    computerScore++;
    console.log("computer wins. scissor beats paper");
  } else {
    console.log("its a draw");
  }
}

function game() {
  playerScore = 0;
  computerScore = 0;
  for (let i = 1; i <= 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerScore, computerScore);
  }
}
//make sure to define the two parameters in playround() or the parameters will default to undefined
console.log(game(5));
if (playerScore < computerScore) {
  console.log("computer is the winner");
  console.log(computerScore);
} else if (computerScore < playerScore) {
  console.log("player is the winner");
  console.log(playerScore);
} else console.log("everyone's a winner");
