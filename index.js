"use strict";
const choices = ["rock", "paper", "scissor"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}
//calling a function, use extra parenthsis so it will return value and not print itself
//console.log(getComputerChoice());

const getPlayerChoice = prompt("What will you choose?");

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissor") {
    console.log("player wins; rock beats scissor");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("computer wins; paper beats rock");
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    console.log("computer wins; rock beats scissor");
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    console.log("player wins.scissor beats paper");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("player wins. paper beats rock");
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    console.log("computer wins. scissor beats paper");
  } else {
    console.log("its a draw");
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    const playerSelection = getPlayerChoice;
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}
//make sure to define the two parameters in playround() or the parameters will default to undefined
console.log(game(5));
