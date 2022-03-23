//global variables 
const computerSelection = ['rock','paper','scissors'];
let playerScore = 0;
let computerScore = 0;


//creates functional DOM objects to manipulate
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const display = document.querySelector('#results');
const human = document.querySelector('#playerScore');
const cpu = document.querySelector('#computerScore');


//logic for buttons when clicked.
rock.addEventListener("click", function(){
    game('rock');
})
paper.addEventListener("click", function(){
    game('paper');
})
scissors.addEventListener("click", function(){
    game('scissors');
})


//play a single round of RPS vs the computer.
function game(player){
        const computer = computerSelection[Math.floor(Math.random() * computerSelection.length)]
        if (player === computer) {
            display.textContent = 'this round is a tie.'
        }
        //if player beats computer
        else if (player === 'rock' && computer === 'scissors') {
            display.textContent = 'you won! rock breaks scissors.'
            playerScore++
            human.textContent = playerScore
        }   
        else if (player === 'paper' && computer === 'rock') {
            display.textContent = 'you won! paper covers rock.'
            playerScore++
            human.textContent = playerScore       
        }
        else if (player === 'scissors' && computer === 'paper') {
            display.textContent = 'you won! scissors shreds paper.'
            playerScore++
            human.textContent = playerScore 
        }
        //if computer beats player
        else if (player === 'paper' && computer === 'scissors') {
            display.textContent = 'you lost, scissors shreds paper.'
            computerScore++
            cpu.textContent = computerScore
        }
        else if (player === 'scissors' && computer === 'rock') {
            display.textContent = 'you lost, rock breaks scissors.'
            computerScore++
            cpu.textContent = computerScore
        }
        else if (player === 'rock' && computer === 'paper') {
            display.textContent = 'you lost, paper covers rock.'
            computerScore++
            cpu.textContent = computerScore
        }
        return;
    }
