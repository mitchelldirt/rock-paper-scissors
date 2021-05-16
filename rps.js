/*********************************************BELOW IS FRONT END CODE***************************************************/
// Create reset score button
// Create 'Computer won / Player won / You tied!' output text every round
let playerScore = 0;
let computerScore = 0;
let playerSelection;

const playerScoreCard = document.querySelector('.playGameDiv p#playerScore')
playerScoreCard.textContent = `Player Score: ${playerScore}`

const computerScoreCard = document.querySelector('.playGameDiv p#computerScore')
computerScoreCard.textContent = `Computer Score: ${playerScore}`

const rockButton = document.querySelector('#rockBtn')
rockButton.addEventListener('click')

const paperButton = document.querySelector('#paperBtn')


const scissorsButton = document.querySelector('#scissorsBtn')




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
    computerSelection = computerSelectionFunc();

    if (playerSelection === undefined) {
        return undefined;
    }

    if (playerSelection === computerSelection) {
        return;
    }
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'scissors') {
                console.log('player won');
                return playerScore += 1;
            } else {
                console.log('computer won');
                return computerScore += 1;
            }
        case 'paper':
            if (computerSelection === 'rock') {
                console.log('player won');
                return playerScore += 1;
            } else {
                console.log('computer won');
                return computerScore += 1;
            }
        case 'scissors':
            if (computerSelection === 'paper') {
                console.log('computer won');
                return playerScore += 1;
            } else {
                console.log('computer won');
                return computerScore += 1;
            }
        default:
            return alert('Input bad >:(')
    }
}

/* function called game(): calls function named playRound 5 times.
also keeps score and declares a winner.
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        let round = playRound();

        // If user cancels the game the if statement will run
        if (round === 0) {
            continue;
        } else if (round === 1) {
            playerScore += 1;
        } else {
            computerScore += 1;
        }
    }
    if (playerScore === computerScore) {
        return alert('You tied! haha')
    }
    return playerScore > computerScore ? alert('Player won the game!') : alert('Computer won the game!');
} */




