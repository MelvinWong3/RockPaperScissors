

//Getting a users choice
getPlayerChoice = () => {
    const playerChoice = prompt('What is  your choice? rock, paper or scissors').toLowerCase();
    if (playerChoice === 'rock') {
        return "rock"
    }
    else if (playerChoice === 'paper') {
        return "paper"
    }
    else if (playerChoice === 'scissors') {
        return "scissors"
    }
    else {
        return "Please input rock, paper or scissors as an answer"
    }
}

//Getting a computer choice
getComputerChoice = () => {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return 'rock'
    } else if (computerChoice === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }

}

// Comparing Computer Choice with User Choice 
playRound = (playerChoice, computerChoice) => {
    if (playerChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        return 'You lose';
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        playerScore++;
        return 'You win';
    } else if (playerChoice === 'rock' && computerChoice === 'rock') {
        tieScore++;
        return 'Its a tie';
    }

    else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++
        return 'You lose';
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        playerScore++
        return 'You win';
    } else if (playerChoice === 'paper' && computerChoice === 'paper') {
        tieScore++;
        return 'Its a tie';
    }

    else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        return 'You lose';
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        playerScore++;
        return 'You win';
    } else if (playerChoice === 'scissors' && computerChoice === 'scissors') {
        tieScore++;
        return 'Its a tie';
    } else {
        return 'Error occured please try again'
    }
}

//sets the scores to 0 initally
let playerScore = parseInt(0);
let computerScore = parseInt(0);
let tieScore = parseInt(0);


//Creates a game function for n amount of loops
game = (playerChoice, computerChoice) => {
    for (i = 0; i < 5; i++) {
        let playerChoice = prompt('What is  your choice? rock, paper or scissors').toLowerCase();
        const computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
        console.log(`your score =  ${playerScore}`)
        console.log(`Computers score =  ${computerScore}`);
    }

    //Determines the Winner at the end of the loop
    if (playerScore > computerScore) {
        console.log("Player Wins");
    } else if (playerScore < computerScore) {
        console.log("Computer Wins");
    } else if (playerScore === computerScore) {
        console.log("Its a tie");
    } else {
        console.log("error");
    }
}

//runs the function 
game()