const btnContainer = document.querySelector(".btn_container");
const conclusion = document.querySelector("#conclusion")
const player = document.querySelector("#player")
const computer = document.querySelector("#computer")

const result = document.querySelector("#result");
const restartBtnContainer = document.querySelector("#restart");
const restartBtn = document.createElement("button");
restartBtn.textContent = "Restart Game";

const buttons = btnContainer.querySelectorAll("button")


let playerChoice;
// let computerChoice;
let playerScore = 0;
let computerScore = 0;

btnContainer.addEventListener("click", (event) => {
  playerChoice = event.target.textContent.toLowerCase();
  console.log(playerChoice);
  playRound(playerChoice);


})

function playRound(playerChoice) {
  let availableChoice = ['rock', 'paper', 'scissors'];
  let randomNum = Math.floor(Math.random() * 3);
  let computerChoice = availableChoice[randomNum];


  if (playerScore >= 5 || computerScore >= 5) {
    winner()
    buttons.forEach((button) => {
      button.disabled = true;
    })

    restartBtnContainer.appendChild(restartBtn);
    return;
  }

  if (playerChoice === computerChoice) {
    conclusion.textContent = `It's a TIE!! Both chose ${playerChoice.toUpperCase()}`;
    player.textContent = `Player's Score: ${playerScore}`;
    computer.textContent = `Computer's Score: ${computerScore}`;
  }
  else if ((playerChoice === 'rock' && computerChoice === 'paper') || (playerChoice === 'paper' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'rock')) {
    conclusion.textContent = `You Lost !!! ${computerChoice.toUpperCase()} beats ${playerChoice.toUpperCase()}`;
    player.textContent = `Player's Score: ${playerScore}`;
    computer.textContent = `Computer's Score: ${computerScore += 1}`;
  }
  else {
    conclusion.textContent = `You WIN !!!! ${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
    player.textContent = `Player's Score: ${playerScore += 1}`;
    computer.textContent = `Computer's Score: ${computerScore}`;
  }
}


function winner() {
  if (computerScore === 5) {
    result.textContent = "Computer WON!!!"
  }
  else if (playerScore === 5) {
    result.textContent = "You WON!!!"
  }
  else if (playerScore === 5 && computerScore === 5) {
    result.textContent = "It's a TIE!!"
  }

}


restartBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  buttons.forEach(button => button.disabled = false);
  conclusion.textContent = '';
  player.textContent = '';
  computer.textContent = '';
  result.textContent = '';
  restartBtnContainer.removeChild(restartBtn);
})