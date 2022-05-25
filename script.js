function computerPlay() {
    let result = Math.random()
    if (result <= .33) {
        return 'rock'
    } else if (result <= .66) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function playRound(playerSelection) {
    let botChoice = computerPlay()
    if ((playerSelection === 'rock' && botChoice === 'paper') ||
        (playerSelection === 'paper' && botChoice === 'scissors') ||
        (playerSelection === 'scissors' && botChoice === 'rock')) {
        console.log('You lose!')
    } else if (playerSelection === botChoice) {
        console.log('Tie, Throw again!')
    } else {
        console.log('You Win!!!!!')
    }
}
let playerSelection = 'rock'
playRound(playerSelection)