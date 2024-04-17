let computerChoice;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      computerChoice = 'rock';
      break;
    case 2:
      computerChoice = 'paper';
      break;
    case 3:
      computerChoice = 'scissors';
      break;
    default:
      console.error("Failed to return a random number");
  }
  return computerChoice;

}

function playRound(playerSelection, computerChoice) {

  if (playerSelection === computerChoice) {
    console.log(`TIE!! both chose ${computerChoice}`);
    console.log(`Player's Score: ${playerScore}  Computer's Score: ${computerScore}`);
  }
  else if (
    (playerSelection === "rock" && computerChoice === "paper") ||
    (playerSelection === "paper" && computerChoice === "scissors") ||
    (playerSelection === "scissors" && computerChoice === "rock")
  ) {
    console.log(`You Lose! ${computerChoice} beats ${playerSelection}`);
    computerScore += 1;
    console.log(`Player's Score: ${playerScore}  Computer's Score: ${computerScore}`);

  }
  else {
    console.log(`You win! ${playerSelection} beats ${computerChoice}`);
    playerScore += 1;
    console.log(`Player's Score: ${playerScore}  Computer's Score: ${computerScore}`);

  }

}


function winner() {
  if (playerScore > computerScore) {
    console.log("You are the WINNER!!!!!!!")
  }
  else if (playerScore < computerScore) {
    console.log("Computer WON!!!!")
  }
  else {
    console.log("It's a TIE!!!")
  }
}

function playGame() {
  // let playerScore = 0;
  let validInputs = ['rock', 'paper', 'scissors']
  let playerSelection;
  for (let i = 1; i <= 5; i++) {
    do {
      playerSelection = prompt("enter your choice: 'rock', 'paper', 'scissors' ").toLowerCase();
      if (!validInputs.includes(playerSelection)) {
        alert("Enter a valid option!!!")

      }

    } while (!validInputs.includes(playerSelection))

    computerChoice = getComputerChoice();

    playRound(playerSelection, computerChoice);
  }
  winner();
}


playGame();
