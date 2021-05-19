/*********************************************BELOW IS FRONT END CODE***************************************************/
// Create reset score button
// Create 'Computer won / Player won / You tied!' output text every round
let playerChoice;
let playerScore = 0;
let computerScore = 0;

const playerScoreCard = document.querySelector('.playGameDiv p#playerScore')
playerScoreCard.textContent = `PLAYER SCORE: ${playerScore}`

const computerScoreCard = document.querySelector('.playGameDiv p#computerScore')
computerScoreCard.textContent = `COMPUTER SCORE: ${computerScore}`

const rockButton = document.querySelector('#rockBtn')
rockButton.addEventListener('click', () => {
    playerChoice = 'rock';
    playRound();
})

const paperButton = document.querySelector('#paperBtn')
paperButton.addEventListener('click', () => {
    playerChoice = 'paper';
    playRound();
})

const scissorsButton = document.querySelector('#scissorsBtn')
scissorsButton.addEventListener('click', () => {
    playerChoice = 'scissors';
    playRound();
})

// Reset the score using the button. Checks if one party has won the game to display the correct message.
const resetButton = document.querySelector('#reset')
resetButton.addEventListener('click', () => {
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        updateScores();
        return;
    } else {
        outputMessage.textContent = 'No points on the board yet!'
    }
    playerScore = 0;
    computerScore = 0;
    updateScores();
})

/*********************************************BELOW IS BACK END CODE***************************************************/

// function named computerSelection: Will randomly return rock, paper, or scissors.
// Uses Math.floor() to round down and Math.random() to select a random item in the list `rps`.
function computerSelectionFunc() {
    // set the border color back to black on the three buttons choices.
    rockButton.setAttribute('style', 'border: 3px solid #06303a')
    paperButton.setAttribute('style', 'border: 3px solid #06303a')
    scissorsButton.setAttribute('style', 'border: 3px solid #06303a')
    let rps = ['rock', 'paper', 'scissors'];
    let selection = rps[Math.floor(Math.random() * rps.length)];
    // Displays what the computer chooses by changing the border color of one of the three button choices.
    if (selection === 'rock') {
        rockButton.setAttribute('style', 'border: 3px solid #3b9ef0')
    } else if (selection === 'paper') {
        paperButton.setAttribute('style', 'border: 3px solid #3b9ef0')
    } else {
        scissorsButton.setAttribute('style', 'border: 3px solid #3b9ef0')
    }
    return selection;
}
/* function named playRound: Takes two parameters `playerSelection` and `computerSelection`
then returns a string letting play know if they won or lost (console.log) */
function playRound(playerSelection, computerSelection) {
    playerSelection = playerChoice;
    computerSelection = computerSelectionFunc();
    playerScore = playerScore;


    if (playerSelection === undefined) {
        console.log('Undefined :(');
        return undefined;
    }

    if (playerSelection === computerSelection) {
        console.log('You tied!');
        updateScores();
        return;
    }
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'scissors') {
                console.log('player won');
                playerScore++;
                break;
            } else {
                console.log('computer won');
                computerScore++;
                break
            }
        case 'paper':
            if (computerSelection === 'rock') {
                console.log('player won');
                playerScore++;
                break;
            } else {
                console.log('computer won');
                computerScore++;
                break
            }
        case 'scissors':
            if (computerSelection === 'paper') {
                console.log('computer won');
                playerScore++;
                break;
            } else {
                console.log('computer won');
                computerScore++;
                break
            }
        default:
            return alert('Input bad >:(')
    }
    updateScores();
}

// 2 variables below are for checking if the score has changed and updating the displayed message.
let previousPlayerScore = 0;
let previousComputerScore = 0;
const outputMessage = document.querySelector('.playGameDiv p#outputMessage');
outputMessage.textContent = 'No points on the board yet!'
function updateScores() {
    if (previousPlayerScore === playerScore && previousComputerScore === computerScore) {
        outputMessage.textContent = '*gasp* You tied!';
    } else if (playerScore > previousPlayerScore) {
        outputMessage.textContent = 'You scored a point!';
    } else if (computerScore > previousComputerScore) {
        outputMessage.textContent = 'Computer scored a point!';
    }

    // Update playerScoreCard.
    const playerScoreCard = document.querySelector('.playGameDiv p#playerScore');
    playerScoreCard.textContent = `PLAYER SCORE: ${playerScore}`;
    // Update computerScoreCard.
    const computerScoreCard = document.querySelector('.playGameDiv p#computerScore');
    computerScoreCard.textContent = `COMPUTER SCORE: ${computerScore}`;

    // Updates the previous scores so that they can be used in the above code block.
    previousPlayerScore = playerScore;
    previousComputerScore = computerScore
    isGameFinished();
}

// Game ends when either player or computer reaches 5 points.
function isGameFinished() {
    if (playerScore === 5) {
        outputMessage.textContent = 'You won the game!'
        resetButton.click();
        return;
    } else if (computerScore === 5) {
        outputMessage.textContent = 'Sorry, computer won the game! :(';
        resetButton.click();
        return;
    } else {
        return;
    }
}