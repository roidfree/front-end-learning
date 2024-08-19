let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() { // Generates secret target number= 
    return Math.floor(Math.random() * 9)
};

console.log(generateTarget());

let target = generateTarget()
function compareGuesses(humanGuess, computerGuess, target) {
    (Maths.abs(humanGuess - target) < Maths.abs(computerGuess - target)) ? true : false 
};

function updateScore(winner) {
    compareGuesses(humanGuess, compareGuesses, generateTarget) ? (humanScore += 1) : (computerScore += 1)
};

advanceRound() {
    currentRoundNumber += 1
}
 

compareGuesses()