const choices=["rock", "paper", "scissor"];
let winner;

function getComputerChoice () {
    const randomIndex= Math.floor(Math.random ()* 3);
    return choices[randomIndex];
}


function getUserChoice() {
    const userSelection=prompt ("Choose your weapon");
    return userSelection.toLowerCase ();
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose, scissors beats paper");
    winner = "Computer";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win, paper beats rock");
    winner = "Player";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win, scissors beats paper");
    winner = "Player";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose, rock beats scissors");
    winner = "Computer";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose, paper beats rock");
    winner = "Computer";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win, rock beats scissors");
    winner = "Player";
  } else {
    console.log(`Tie, you both choose ${playerSelection}`);
  }
  return winner;
}


// function game (){
//     let playerScore = 0;
//     let computerScore = 0;
//     for(let i = 0; i<5; i++) {
//         const playerSelection= getUserChoice ();
//         const computerSelection= getComputerChoice ();
//         playRound(playerSelection, computerSelection);
//         if (winner ==="player") {
//             playerScore++;
//         } else if (winner==="computer") {
//             computerScore++;
//     }
// }
//     console.log(
//     `your score is ${playerScore} and computer score is ${computerScore}`);
//     return playerScore>computerScore
//     ?"Player is a winner"
//     :"Computer is a winner"
// }


// console.log(game(5));
//function for the game with score track and winner declaration
 function game() {
   let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
     const playerSelection = getUserChoice();
   const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (winner === "Player") {
       playerScore++;
   } else if (winner === "Computer") {
      computerScore++;
    }
   }
  console.log(
    `Your score is ${playerScore} and computer score is ${computerScore}`
  );
 return playerScore > computerScore
    ? "Player is a Winner"
     : "Computer is a Winner";
 }

 console.log(game(3));