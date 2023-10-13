// Ekstra oppgaver som kan legges til:
/*

* You probably calculated the distance from the computer guess to the target and from the human guess to the target. 
Move this into a separate getAbsoluteDistance() function that takes two numbers and returns the distance, 
and then use that inside your compareGuesses() function.

* Add functionality to check whether the user guess is between 0 and 9 and alert() the user that their number is out of range. 
It’s not possible to set a number outside this range with the + and = buttons, 
but users can do so by typing directly in the input field.

*/

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