// a valid set of inputs for the computer and player to choose from
const selectMove = ['rock', 'paper', 'scissors'];
playerScore = 0;
computerScore = 0;

//logic for the computer to select a choice at random from RPS
function computerPlayer() {
    computerChoice = selectMove[Math.floor(Math.random() * selectMove.length)];
    console.log (`The computer chooses ${computerChoice}!`);
    return computerChoice;
}

//logic for the player choice.
function player() {
    playerChoice = prompt('rock, paper, scissors?').toLowerCase();
    console.log(`You choose ${playerChoice}!`);
    return playerChoice;
}

//plays a single round of RPS
function playRound(playerSelection, computerSelection){
    player();
    computerPlayer();

    //in event of a tie 
    if (playerChoice === computerChoice) {
        console.log('its a tie!')
    }
    //if player beats computer
    else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        console.log  ('you won! rock breaks scissors.') 
    }   
    else if (playerChoice === 'paper' && computerChoice === 'rock') {
        console.log('you won! paper covers rock.') 
    }
    else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        console.log('you won! scissors shreds paper.') 
    }
    //if computer beats player
    else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        console.log('computer wins, scissors shreds paper.') 
    }
    else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        console.log('computer wins, rock breaks scissors.') 
    }
    else if (playerChoice === 'rock' && computerChoice === 'paper') {
        console.log('computer wins, paper covers rock.') 
    }
    return;
}

//plays a series of 5 games of RPS and declares a overall winner at the end
function game() {
    for (let roundCount = 0; roundCount < 5; roundCount++) {
        playRound()
    }
}

game()