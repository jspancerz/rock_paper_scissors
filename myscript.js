//notes to self:
// left off on the final step, have to figure out a way to keep score at the end of each round of play
// the 'score' has to persist and update through all five games and then declare a winner via console.log at the end of the matches.


// a valid set of inputs for the computer and player to choose from
const selectMove = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

// compares the results of the entire series of 5 games and declares a overall winner.
function compareResults(){
    playerScore;
    computerScore;
    if(playerScore > computerScore){
        console.log('congrats, you\'v won!')
    }
    else if (playerScore === computerScore){
        console.log('this match is a draw!')
    }
    else {
        console.log ('better luck next time, you lost.')
    }
}

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

//plays a single round of RPS and tracks score after each round of play
function playRound(playerSelection, computerSelection){
    player();
    computerPlayer();
    computerScore;
    playerScore;

    //in event of a tie 
    if (playerChoice === computerChoice) {
        console.log('its a tie!')
    }
    //if player beats computer
    else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        console.log  ('you won! rock breaks scissors.') 
        playerScore++
        console.log(`human score - ${playerScore} vs computer score - ${computerScore}`)
    }   
    else if (playerChoice === 'paper' && computerChoice === 'rock') {
        console.log('you won! paper covers rock.') 
        playerScore++
        console.log(`human score - ${playerScore} vs computer score - ${computerScore}`)
    }
    else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        console.log('you won! scissors shreds paper.') 
        playerScore++
        console.log(`human score - ${playerScore} vs computer score - ${computerScore}`)
    }
    //if computer beats player
    else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        console.log('computer wins, scissors shreds paper.') 
        computerScore++
        console.log(`human score - ${playerScore} vs computer score - ${computerScore}`)
    }
    else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        console.log('computer wins, rock breaks scissors.') 
        computerScore++
        console.log(`human score - ${playerScore} vs computer score - ${computerScore}`)
    }
    else if (playerChoice === 'rock' && computerChoice === 'paper') {
        console.log('computer wins, paper covers rock.') 
        computerScore++
        console.log(`human score - ${playerScore} vs computer score - ${computerScore}`)
    }
    return;
}

//plays a series of 5 games of RPS.
function game() {
    for (let roundCount = 0; roundCount < 5; roundCount++) {
        playRound()
        }
    }

game()
compareResults()