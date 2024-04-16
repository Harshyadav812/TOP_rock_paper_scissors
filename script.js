let computerChoice;
let playerScore = 0;
let computerScore = 0;

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



function playRound(playerSelection, computerChoice) {

    if (playerSelection === computerChoice) {
        console.log(`TIE!! both chose ${computerChoice}`);
        console.log(`Player's Score: ${playerScore}  Computer's Score: ${computerScore}`);
    }
    else if (playerSelection === "rock" && computerChoice === "paper") {
        console.log(`You Lose! ${computerChoice} beats ${playerSelection}`);
        computerScore += 1;
        console.log(`Player's Score: ${playerScore}  Computer's Score: ${computerScore}`);


    }
    else if (playerSelection === "paper" && computerChoice === "scissors") {
        console.log(`You Lose! ${computerChoice} beats ${playerSelection}`);
        computerScore += 1;
        console.log(`Player's Score: ${playerScore}  Computer's Score: ${computerScore}`);


    }
    else if (playerSelection === "scissors" && computerChoice === "rock") {
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

// playRound(playerSelection, computerChoice);

function playGame() {
    // let playerScore = 0;
    let validInputs = ['rock', 'paper', 'scissors']
    let playerSelection;
    for (let i = 1; i <= 5; i++) {
        do {
            playerSelection = prompt("enter your choice: 'rock', 'paper', 'scissors' ").toLowerCase();
            if (!validInputs.includes(playerSelection)) {
                prompt("Enter a valid option!!!")
            }

        } while (!validInputs.includes(playerSelection))

        computerChoice = getComputerChoice();

        playRound(playerSelection, computerChoice);

    }
}


playGame();
