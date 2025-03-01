

function game(userchoice) {
    let randomNum = Math.floor(Math.random() * 3);
    
    let botChoice = ''

    if (randomNum === 0) {
        botChoice = 'rock'
    } else if (randomNum == 1) {
        botChoice = 'paper'
    } else {
        botChoice = 'scissors'
    }

    if (botChoice === 'rock') {
        if (userchoice === 'rock') {
            console.log('hi')
        } else if (userchoice === 'paper') {
            win('paper', 'rock', true)
        } else  {
            win('scissors', 'rock', false)
        }

    } else if (botChoice === 'paper') {
        if (userchoice === 'rock') {
            win('rock', 'paper', false)
        } else if (userchoice === 'paper') {
            console.log('hi')
        } else  {
            win('scissors', 'paper', true)
        }
    } else { // scissors from bot
        if (userchoice === 'rock') {
            console.log('hi')
        } else if (userchoice === 'paper') {
            console.log('hi')
        } else  {
            console.log('hi')
        }
    }

}

function win(userchoice, botchoice, won) {
    let body = document.body
    let h2 = document.createElement('h2')
    let result
    if (won) {
         result = `You chose: ${userchoice}, bot chose: ${botchoice}. You win`
    } else {
         result = `You chose: ${userchoice}, bot chose: ${botchoice}. You lose`
    }

    h2.innerText = result
    
    body.appendChild(h2)
}

// Alternate way to connect your buttons

// let rockButton = document.getElementById('rock-button')
// rockButton.addEventListener('click', ()=>game('rock'))

// let paperButton = document.getElementById('paper-button')
// paperButton.addEventListener('click', ()=>game('paper'))

// let scissorsButton = document.getElementById('scissors-button')
// scissorsButton.addEventListener('click', ()=>game('scissors'))