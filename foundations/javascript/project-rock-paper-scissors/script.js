// 1. Get computer choice
// 2. Computer choice randomly returns rock, paper or scissors 
//    - use math.random to get value
//    - Use console.log to test

// 3. Get human choice
//    - use prompt to get user input, assume input is always valid, make case insensitive

// 4. Declare core variables - humanScore and computerScore (init with values of 0)

// 5. Write logic to play one round
//    -increment human or computer score based on who wins round

// 6. Write logic to play entire game (5 rounds)

// while roundNumber is less than 5, 
// call playRound


let humanScore = 0;
let computerScore = 0;
let round = 0;

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

function getHumanChoice() {
  return prompt("choose: rock, paper, or scissors").toLowerCase(); // just gonna assume input is valid string
}


function playRound() {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();
  round += 1;

  if (computerChoice == humanChoice) {
    console.log('This round is a tie!');
  } else if (
    (computerChoice == "rock" && humanChoice == "scissors") ||
    (computerChoice == "paper" && humanChoice == "rock") ||
    (computerChoice == "scissors" && humanChoice == "paper")
  ) {
    console.log(`You lose this round! ${computerChoice} to beats ${humanChoice}!`);
    computerScore += 1;
  } else {
    console.log(`You win this round! ${humanChoice} beats ${computerChoice}!`);
    humanScore += 1;
  }
  console.log(`Round ${round} score: You - ${humanScore}, Computer - ${computerScore}`);
}


function playGame() {
  while (round < 5) {
    playRound();
  }

  if (humanScore == computerScore) {
    console.log('The game is a tie!');
  } else if (humanScore > computerScore) {
    console.log(`You win the game! Score: You - ${humanScore}, Computer - ${computerScore}`);
  } else {
    console.log(
      `You lose the game! Score: You - ${humanScore}, Computer - ${computerScore}`
    );
  }
  return;
}
