/*********************************************BELOW IS FRONT END CODE***************************************************/
let playerScore = 0;
let computerScore = 0;
const startButtonContainer = document.getElementById('startButtonDiv');
const startButton = document.getElementById('startButton');


// Below is page content for when the game starts

// main div start
const playGameDiv = document.createElement('div');
playGameDiv.classList.add('playGameDiv');
playGameDiv.setAttribute('style', 'background-color: pink; border: 3px solid black');

// scorecard div start
const scorecardDiv = document.createElement('div');
scorecardDiv.classList.add('playGameDiv');

const playerScoreCard = document.createElement('p');
playerScoreCard.classList.add('scoreCard');
playerScoreCard.setAttribute('id', 'playerScore');
playerScoreCard.textContent = `Player Score: ${playerScore}`;
scorecardDiv.appendChild(playerScoreCard);

const computerScoreCard = document.createElement('p');
computerScoreCard.classList.add('scoreCard');
computerScoreCard.setAttribute('id', 'computerScore');
computerScoreCard.textContent = `Computer Score: ${computerScore}`;
scorecardDiv.appendChild(computerScoreCard);

playGameDiv.appendChild(scorecardDiv);
// scorecard div end

// Game buttons div start
const gameDiv = document.createElement('div');
gameDiv.classList.add('playGameDiv');

const rockButton = document.createElement('button');
rockButton.classList.add('selectorButton');
rockButton.setAttribute('id', 'rockBtn');
rockButton.textContent = 'ROCK';
gameDiv.appendChild(rockButton);

const paperButton = document.createElement('button');
paperButton.classList.add('selectorButton');
paperButton.setAttribute('id', 'paperBtn');
paperButton.textContent = 'PAPER';
gameDiv.appendChild(paperButton);

const scissorsButton = document.createElement('button');
scissorsButton.classList.add('selectorButton');
scissorsButton.setAttribute('id', 'scissorsBtn');
scissorsButton.textContent = 'SCISSORS';
gameDiv.appendChild(scissorsButton);

playGameDiv.appendChild(gameDiv);
// Game buttons div end

// This will replace the start game button with the actual game :)
const clone = playGameDiv.cloneNode(true);
startButton.addEventListener('click', () => {
    startButtonContainer.replaceWith(clone);
});


// Below is code linking front end to the backend




// YOU NEED TO FIX THE INITIAL SELECTION STUFF TO WORK WITH THE FRONT END 


/*********************************************BELOW IS BACK END CODE***************************************************/

// function named computerSelection: Will randomly return rock, paper, or scissors.
// Uses Math.floor() to round down and Math.random() to select a random item in the list `rps`.
function computerSelectionFunc() {
    let rps = ['rock', 'paper', 'scissors'];
    let selection = rps[Math.floor(Math.random() * rps.length)];
    return selection;
};

/* function named playerSelection: let player choose either rock, paper or scissors 
(MAKE SURE THIS IS CASE INSENSITIVE) */


let playerSelection;

function paperButtonPressed() {
    playerSelection = 'rock';
    console.log('rockButton clicked');
    playRound();
}

function rockButtonPressed() {
    playerSelection = 'rock';
    console.log('rockButton clicked');
    playRound();
}

const rockButtonSelector = document.querySelector('#rockBtn');
rockButtonSelector.addEventListener('click', () => {
    playerSelection = 'rock';
    console.log('rockButton clicked');
    playRound();
})

paperButton.addEventListener('click', () => {
    playerSelection = 'paper';
    console.log('paperButton clicked');
    playRound();
});

scissorsButton.addEventListener('click', () => {
    playerSelection = 'scissors';
    console.log('scissorsButton clicked');
    return playRound();
});


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




