//notes to self: game working correctly 'finally', now
//i need to create a scoreboard that updates at the end of each round
//ill do this by creating divs inside the html
//ill then make the html elements into 'dom objects' by creating them inside my js file using let/const
// i need to add some form of logic to the end of the game function that updates at the end of each round and reflects in the score
// the score object will have to be updated on screen.
//announce a winner (alert?) after a player has reached a total of 5 points.

///AFTER GAME IS DONE TRY MAKING SELECTION FOR PLAYER WITH SOLEY CLICKING ON BUTTON
//NO ""HARD CODING"" values into each button press.

//global variables 
computerSelection = ['rock','paper','scissors']
let playerScore = 0;
let computerScore = 0;

//creates functional DOM objects to select.
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

//logic for buttons when clicked.
rock.addEventListener("click", function(e){
    game('rock');
})
paper.addEventListener("click", function(e){
    game('paper')
})
scissors.addEventListener("click", function(e){
    game('scissors')
})

//play a single round of RPS vs the computer.
function game(player){
        const computer = computerSelection[Math.floor(Math.random() * computerSelection.length)]
        if (player === computer) {
            console.log('its a tie!')
        }
        //if player beats computer
        else if (player === 'rock' && computer === 'scissors') {
            console.log  ('you won! rock breaks scissors.') 
        }   
        else if (player === 'paper' && computer === 'rock') {
            console.log('you won! paper covers rock.') 
        }
        else if (player === 'scissors' && computer === 'paper') {
            console.log('you won! scissors shreds paper.') 
        }
        //if computer beats player
        else if (player === 'paper' && computer === 'scissors') {
            console.log('computer wins, scissors shreds paper.') 
        }
        else if (player === 'scissors' && computer === 'rock') {
            console.log('computer wins, rock breaks scissors.') 
        }
        else if (player === 'rock' && computer === 'paper') {
            console.log('computer wins, paper covers rock.') 
        }
        return;
    }
