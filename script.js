let playerSelection = prompt("enter your choice: ").toLowerCase();
let computerChoice;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    // console.log(randomNumber);

    if (randomNumber === 1) {
        return computerChoice = "rock";
    }
    else if (randomNumber === 2) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    }

}

computerChoice = getComputerChoice();

function game(playerSelection, computerChoice) {
    if (playerSelection === computerChoice) {
        console.log(`TIE!! both chose ${computerChoice}`);
    }
    else if (playerSelection === "rock" && computerChoice === "paper") {
        console.log(`You Lose! ${computerChoice} beats ${playerSelection}`);
    }
    else if (playerSelection === "paper" && computerChoice === "scissors") {
        console.log(`You Lose! ${computerChoice} beats ${playerSelection}`);
    }
    else if (playerSelection === "scissors" && computerChoice === "rock") {
        console.log(`You Lose! ${computerChoice} beats ${playerSelection}`);
    }
    else {
        console.log(`You win! ${playerSelection} beats ${computerChoice}`);
    }
}

game(playerSelection, computerChoice);
