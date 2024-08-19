let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generates secret target number
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

console.log(generateTarget());

function compareGuesses(humanGuess, computerGuess, target) {
  return Math.abs(humanGuess - target) <= Math.abs(computerGuess - target);
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
}

function advanceRound() {
  currentRoundNumber += 1;
}
