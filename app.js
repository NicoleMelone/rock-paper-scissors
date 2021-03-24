
function play(playerChoice) {
    let wins = {
        rock: 'scissors',
        scissors: 'paper',
        paper: 'rock',
    }
    let computerChoice = computer()
    if (playerChoice === computerChoice) {
        document.getElementById('msg').innerText = `${playerChoice} vs ${computerChoice}  It's a Tie!`
    } else if (wins[playerChoice] === computerChoice) {
        document.getElementById('msg').innerText = `${playerChoice} vs ${computerChoice}  You won!`
    } else {
        document.getElementById('msg').innerText = `${playerChoice} vs ${computerChoice} You lose! Try again.`
    }


}

function computer() {
    let choices = ['rock', 'paper', 'scissors']
    let computerChoice = Math.floor(Math.random() * choices.length)
    return choices[computerChoice]
}

