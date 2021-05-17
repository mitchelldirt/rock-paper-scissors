/*********************************************BELOW IS FRONT END CODE***************************************************/
// Create reset score button
// Create 'Computer won / Player won / You tied!' output text every round
let playerChoice;
let playerScore = 0;
let computerScore = 0;

const playerScoreCard = document.querySelector('.playGameDiv p#playerScore')
playerScoreCard.textContent = `Player Score: ${playerScore}`

const computerScoreCard = document.querySelector('.playGameDiv p#computerScore')
computerScoreCard.textContent = `Computer Score: ${computerScore}`

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

const resetButton = document.querySelector('#reset')
resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    updateScores();
})


/*********************************************BELOW IS BACK END CODE***************************************************/

// function named computerSelection: Will randomly return rock, paper, or scissors.
// Uses Math.floor() to round down and Math.random() to select a random item in the list `rps`.
function computerSelectionFunc() {
    let rps = ['rock', 'paper', 'scissors'];
    let selection = rps[Math.floor(Math.random() * rps.length)];
    return selection;
};

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

    // Update playerScoreCard
    const playerScoreCard = document.querySelector('.playGameDiv p#playerScore');
    playerScoreCard.textContent = `Player Score: ${playerScore}`;
    // Update computerScoreCard
    const computerScoreCard = document.querySelector('.playGameDiv p#computerScore');
    computerScoreCard.textContent = `Computer Score: ${computerScore}`;

    // Gra
    previousPlayerScore = playerScore;
    previousComputerScore = computerScore
    isGameFinished();
}

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