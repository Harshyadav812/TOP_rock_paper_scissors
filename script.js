

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);
    let computerChoice;

    if (randomNumber === 1) {
        return computerChoice = "rock";
    }
    else if (randomNumber === 2) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    }

}

let print = getComputerChoice();
console.log(print);