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

function playRound(playerSelection, computerPlay){
    if(playerSelection === computerPlay){
        return 'Tie, throw again!'
    } else if(playerSelection === 'rock' && computerPlay === 'paper'){
        return 'You Lose!'
    }
}