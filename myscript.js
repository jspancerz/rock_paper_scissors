//note to self, to finish rps need to create alert after 5 wins declaring a victor (either cpu or human) this can be done with a formatted string ${}.
//also need to fix css, indicate which score is which.


//AFTER GAME IS DONE//
// TRY MAKING SELECTION FOR PLAYER WITH SOLEY CLICKING ON BUTTON
//NO ""HARD CODING"" values into each button press.
//Style it to make it more appealing (perhaps add some images that appear or disappear representing values)
//make scoreboard a function that updates at the end of each round of play, which when scoreboard reaches 5 wins on either side declares a victor with a 'alert' function.

//global variables 
computerSelection = ['rock','paper','scissors'];
let playerScore = 0;
let computerScore = 0;


//creates functional DOM objects to manipulate
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const display = document.querySelector('.results');
const human = document.querySelector('#playerScore');
const cpu = document.querySelector('#computerScore');



//logic for buttons when clicked.
rock.addEventListener("click", function(){
    game('rock');
})
paper.addEventListener("click", function(){
    game('paper')
})
scissors.addEventListener("click", function(){
    game('scissors')
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

// function runningScore(playerScore, computerScore){
    
// }