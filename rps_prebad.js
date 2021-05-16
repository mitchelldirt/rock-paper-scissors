/*********************************************BELOW IS FRONT END CODE***************************************************/
const playerScoreCard = document.querySelector('.playGameDiv p#playerScore')
playerScoreCard.textContent = 'Player Score: ${playerScore}'







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




