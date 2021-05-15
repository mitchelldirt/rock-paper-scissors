/*********************************************BELOW IS FRONT END CODE***************************************************/
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
playerScoreCard.textContent = `Player Score: ${game.playerScore}`;
scorecardDiv.appendChild(playerScoreCard);

const computerScoreCard = document.createElement('p');
computerScoreCard.classList.add('scoreCard');
computerScoreCard.setAttribute('id', 'computerScore');
computerScoreCard.textContent = `Computer Score: ${game.computerScore}`;
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
function playerSelectionFunc() {
    let selection;
    let initialSelection = prompt('rock, paper, or scissors?');
    try { selection = initialSelection.toLowerCase(); }
    catch (selection) {
        // log is used to skip ahead and give small amount of feedback.
        return console.log('Canceled selection by user');
    }
    if (selection === 'rock' || selection === 'paper' || selection === 'scissors') {
        return selection;
    } else {
        alert('You have not picked a valid selection :( Try again!');
        return playerSelection();
    }
};

/* function named playRound: Takes two parameters `playerSelection` and `computerSelection`
then returns a string letting play know if they won or lost (console.log) */
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelectionFunc();
    computerSelection = computerSelectionFunc();

    if (playerSelection === undefined) {
        return undefined;
    }

    /* return values:
     `0` === Tied game.
     `1` === Player won.
     `2` === Computer won.
    */

    if (playerSelection === computerSelection) {
        alert('Round tied!');
        return 0;
    }
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'scissors') {
                return 1;
            } else {
                alert('Computer won!')
                return 2;
            }
        case 'paper':
            if (computerSelection === 'rock') {
                alert('Player won!')
                return 1;
            } else {
                alert('Computer won!')
                return 2;
            }
        case 'scissors':
            if (computerSelection === 'paper') {
                alert('Player won!')
                return 1;
            } else {
                alert('Computer won!')
                return 2;
            }
        default:
            return alert('Input bad >:(')
    }
}

/* function called game(): calls function named playRound 5 times.
also keeps score and declares a winner. */
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        let round = playRound();

        // If user cancels the game the if statement will run
        if (round === undefined) {
            return alert('You canceled the game :(')
        } else if (round === 0) {
            alert(`Player score: ${playerScore} Computer Score: ${computerScore}`)
            continue;
        } else if (round === 1) {
            playerScore += 1;
        } else {
            computerScore += 1;
        }
        alert(`Player score: ${playerScore} Computer Score: ${computerScore}`)
    }
    if (playerScore === computerScore) {
        return alert('You tied! haha')
    }
    return playerScore > computerScore ? alert('Player won the game!') : alert('Computer won the game!');
}




