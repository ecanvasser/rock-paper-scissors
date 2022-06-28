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
        alert(result);
        +userScore++
        console.log(userScore)
    } else if (result.includes('Tie')) {
        alert(result);
        console.log(userScore, computerScore)
    } else {
        alert(result);
        +computerScore++
        console.log(computerScore)
    };

    if (userScore == 5) {
        userScore = 0;
        computerScore = 0;
        return alert('Congrats! You win');
    } else if (computerScore == 5) {
        userScore = 0;
        computerScore = 0;
        return alert('Rats! You lost');
    }
};

let userScore = document.querySelector('.playerScore').textContent;
userScore = 0;
let computerScore = document.querySelector('.compScore').textContent;
computerScore = 0;

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