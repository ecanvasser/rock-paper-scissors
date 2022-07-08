function computerPlay() {
    let choices = ['rock', 'paper', 'scissor'];
    let finalChoice = choices[Math.floor(Math.random() * 3)];
    return finalChoice
};

function playRound(playerSelection, computerSelection) {
    
    let playerDisplayValue = playerSelection[0].toUpperCase() + playerSelection.slice(1,);

    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        return 'You lost this round! Paper beats rock';
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissor') {
        return 'You lost this round! Scissors beat paper';
    } else if (playerSelection.toLowerCase() === 'scissor' && computerSelection === 'rock') {
        return 'You lost this round! Rock beats scissor';
    } else if (playerSelection.toLowerCase() === computerSelection) {
        return 'Tie!';
    } else {
        return `Winner winner chicken dinner! ${playerDisplayValue} beats ${computerSelection}`;
    }
}

function game(choice) {
    
    let result = playRound(choice, computerPlay());
    
    if (result.includes('win')) {
        gameLog.innerHTML = result;
        userScore.innerHTML++
        console.log(userScore)
    } else if (result.includes('Tie')) {
        gameLog.innerHTML = result;
    } else {
        gameLog.innerHTML = result;
        computerScore.innerHTML++
    };

    if (userScore.innerHTML == 5) {
        userScore.innerHTML = 0;
        computerScore.innerHTML = 0;
        gameLog.innerHTML = 'Congrats! You win. Click a button to start a new game';
    } else if (computerScore.innerHTML == 5) {
        userScore.innerHTML = 0;
        computerScore.innerHTML = 0;
        gameLog.innerHTML = 'Rats! You lost.  Click a button to start a new game';
    }
};

let userScore = document.querySelector('.playerScore');
userScore.innerHTML = 0;
let computerScore = document.querySelector('.compScore');
computerScore.innerHTML = 0;
let gameLog = document.querySelector('.game-log');
gameLog.innerHTML = 'You ready? Start clicking';

let rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click', function(e) {
    game(e.target.textContent);
});

let paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click', function(e) {
    game(e.target.textContent);
});

let scissorBtn = document.querySelector('.scissor');
scissorBtn.addEventListener('click', function(e) {
    game(e.target.textContent);
});