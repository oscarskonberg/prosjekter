let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

function compareGuesses(user, computer, target) {
  const userClosest = user - target;
  const computerClosest = computer - target;
  if (Math.abs(userClosest) < Math.abs(computerClosest)) {
    return true;
  } else if (userClosest === computerClosest) {
    return true;
  }
  return false;
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;