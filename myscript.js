const moveSelection = ['rock', 'paper', 'scissors']

function computerPlay () {
    let computerSelection = moveSelection[Math.floor(Math.random() * moveSelection.length)]
    return(computerSelection)
}