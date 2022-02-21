// a valid set of inputs for the computer and player to choose from
const selectMove = ['rock', 'paper', 'scissors'];
playerScore = 0;
computerScore = 0;

function computerPlayer() {
    computerChoice = selectMove[Math.floor(Math.random() * selectMove.length)];
    console.log (`The computer chooses ${computerChoice}!`);
    return computerChoice;
}

function player() {
    playerChoice = prompt('rock, paper, scissors?').toLowerCase();
    console.log(`You choose ${playerChoice}!`);
    return playerChoice;
}

function playRound(playerSelection, computerSelection){
    player();
    computerPlayer();

    //in event of a tie 
    if (playerChoice === computerChoice) {
        console.log('its a tie!')
    }
    //if player beats computer
    else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        console.log  ('you won! rock breaks scissors.') && playerScore++
    }   
    else if (playerChoice === 'paper' && computerChoice === 'rock') {
        console.log('you won! paper covers rock.') && playerScore++
    }
    else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        console.log('you won! scissors shreds paper.') && playerScore++
    }
    //if computer beats player
    else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        console.log('computer wins, scissors shreds paper.') && computerScore++
    }
    else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        console.log('computer wins, rock breaks scissors.') && computeScore++
    }
    else if (playerChoice === 'rock' && computerChoice === 'paper') {
        console.log('computer wins, paper covers rock.') && computerScore++
    }
    return;
}

//plays a series of 5 games and declares a overall winner at the end
function game() {
    for (let roundCount = 0; roundCount < 5; roundCount++) {
        playRound()
    }
}

game()