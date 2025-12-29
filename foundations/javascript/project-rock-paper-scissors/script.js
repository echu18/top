

let humanScore = 0;
let computerScore = 0;
let round = 1;

let message = document.getElementById('message');
let humanScoreMessage = document.getElementById('human-score').firstElementChild;
let computerScoreMessage = document.getElementById('computer-score').firstElementChild;
let roundLabel = document.getElementById('round-container').firstElementChild.firstElementChild;

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 100);
  if (randomNum < 34) {
    return 'rock';
  } else if (randomNum < 67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}


function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
  let text = ''


  if (computerChoice == humanChoice) {
    text = 'This round is a tie!';
  } else if (
    (computerChoice == "rock" && humanChoice == "scissors") ||
    (computerChoice == "paper" && humanChoice == "rock") ||
    (computerChoice == "scissors" && humanChoice == "paper")
  ) {
    computerScore += 1;
    text = `You lose this round! ${computerChoice} to beats ${humanChoice}!`;
  } else {
    humanScore += 1;
    text = `You win this round! ${humanChoice} beats ${computerChoice}!`;
  }

  round += 1

  roundLabel.textContent = round;
  humanScoreMessage.textContent = humanScore;
  computerScoreMessage.textContent = computerScore;

  if (humanScore == 5) {
    text = `You win! You - ${humanScore}, Computer - ${computerScore}`;
  } else if (computerScore == 5) {
    text = `You lose! You - ${humanScore}, Computer - ${computerScore}`;
  }

  message.textContent = text;
  
  // message.textContent = `Round ${round} score: You - ${humanScore}, Computer - ${computerScore}`;
}



let btns = Array.from(document.getElementById('btn-container').children);
let btnRock = document.getElementById('rock');
let btnPaper = document.getElementById('paper');
let btnScissors = document.getElementById('scissors');

btns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    playRound(e.target.value)
  })
})

















// function getHumanChoice() {
//   return prompt("choose: rock, paper, or scissors").toLowerCase(); // just gonna assume input is valid string
// }


// function playGame() {
//   while (round < 5) {
//     playRound();
//   }

//   if (humanScore == computerScore) {
//     console.log('The game is a tie!');
//   } else if (humanScore > computerScore) {
//     console.log(`You win the game! Score: You - ${humanScore}, Computer - ${computerScore}`);
//   } else {
//     console.log(
//       `You lose the game! Score: You - ${humanScore}, Computer - ${computerScore}`
//     );
//   }
//   return;
// }
