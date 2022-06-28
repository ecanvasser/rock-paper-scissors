function computerPlay() {
    let choices = ['rock', 'paper', 'scissor'];
    let finalChoice = choices[Math.floor(Math.random() * 3)];
    return finalChoice
};

function playRound(playerSelection, computerSelection) {
    
    let playerDisplayValue = playerSelection[0].toUpperCase() + playerSelection.slice(1,);

    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        return 'You lost this round! Paper beats rock'
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissor') {
        return 'You lost this round! Scissors beat paper'
    } else if (playerSelection.toLowerCase() === 'scissor' && computerSelection === 'rock') {
        return 'You lost this round! Rock beats scissor'
    } else if (playerSelection.toLowerCase() === computerSelection) {
        return 'Tie!'
    } else {
        return `Winner winner chicken dinner! ${playerDisplayValue} beats ${computerSelection}`
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound(prompt('Rock, paper, or scissor?'), computerPlay());
        
        if (result.includes('win')) {
            alert(`Round ${i + 1}: ` + result);
            userScore++;
        } else if (result.includes('Tie')) {
            alert(`Round ${i + 1}: ` + result);
            userScore += 0;
            computerScore += 0;
        } else {
            alert(`Round ${i + 1}: ` + result);
            computerScore++;
        }
    }

    if (userScore > computerScore) {
        return alert('Congrats! You win');
    } else if (userScore === computerScore) {
        return alert('It\'s a tie!');
    } else {
        return alert('Rats! You lost');
    }
}