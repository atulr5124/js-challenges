// Challenge 1: Your age in days

function ageInDays() {
    if (document.getElementById('ageInDays')) {
        document.getElementById('ageInDays').remove()
    }
    var birthYear = prompt('What year were you born in?')
    // var birthMonth = prompt('What month were you born in?')
    // var birthDate = prompt('What day of the month were you born on?')
    var currentYear = new Date().getFullYear()
    var ageDays = (currentYear - birthYear) * 265
    var h1 = document.createElement('h1')
    var textAnswer = document.createTextNode('You are ' + ageDays + ' days old.')
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1)
}

function reset() {
    document.getElementById('ageInDays').remove()
}

// Challenge 2: Cats generator
function generateCats() {
    var image = document.createElement('img')
    var div = document.getElementById('flex-cat-gen')
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image)
}

// Challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice) {
    var humanChoice, botChoice
    humanChoice = yourChoice.id
    botChoice = generateBotChoice()
    results = decideWinner(humanChoice, botChoice)
    message = finalMessage(results)
    console.log(message)
    rpsFrontEnd(humanChoice, botChoice, message)
}

function generateBotChoice() {
    choices = ['rock', 'paper', 'scissors']
    botChoiceIndex = Math.floor(Math.random() * 3)
    return choices[botChoiceIndex]
}

function decideWinner(humanChoice, botChoice) {
    if ((humanChoice == "rock" && botChoice == "paper") || (humanChoice == "paper" && botChoice == "scissors") || (humanChoice == "scissors" && botChoice == "rock")) {
        return [0, 1]
    } else if ((humanChoice == "rock" && botChoice == "scissors") || (humanChoice == "paper" && botChoice == "rock") || (humanChoice == "scissors" && botChoice == "paper")) {
        return [1, 0]
    } else {
        return [1, 1]
    }
}

function finalMessage(results) {
    if (results[0] == 0 && results[1] == 1) {
        return {
            "msg": "You lost!",
            "color": "red"
        }
    } else if (results[0] == 1 && results[1] == 0) {
        return {
            "msg": "You won!",
            "color": "green"
        }
    } else {
        return {
            "msg": "It is a tie!",
            "color": "orange"
        }
    }
}

function rpsFrontEnd(humanChoice, botChoice, message) {
    var resultDiv = document.getElementById('flex-box-rps-div')
    var playAgainButton = document.getElementById('play-again-btn')
    resultDiv.innerHTML = ""
    var humanChoiceImage = document.createElement('img')
    humanChoiceImage.src = "./static/images/" + humanChoice + ".png"
    var botChoiceImage = document.createElement('img')
    botChoiceImage.src = "./static/images/" + botChoice + ".png"
    var resultsDeclaration = document.createElement('h2')
    resultsDeclaration.textContent = message.msg
    resultsDeclaration.style = "color:" + message.color
    resultDiv.appendChild(humanChoiceImage)
    resultDiv.appendChild(resultsDeclaration)
    resultDiv.appendChild(botChoiceImage)
    playAgainButton.style = "display: inline"
}

function playRpsAgain() {
    var playAgainButton = document.getElementById('play-again-btn')
    playAgainButton.style = "display: none"
    var playAreaDiv = document.getElementById('flex-box-rps-div')
    playAreaDiv.innerHTML = ""
    playAreaDiv.id = "flex-box-rps-div"
    var rockElement = document.createElement("img")
    var paperElement = document.createElement("img")
    var scissorsElement = document.createElement("img")
    rockElement.src = "./static/images/rock.png"
    rockElement.id = "rock"
    rockElement.alt = ""
    rockElement.setAttribute("onclick", "rpsGame(this)")
    console.log(rockElement)
    paperElement.src = "./static/images/paper.png"
    paperElement.id = "paper"
    paperElement.alt = ""
    paperElement.setAttribute("onclick", "rpsGame(this)")
    scissorsElement.src = "./static/images/scissors.png"
    scissorsElement.id = "scissors"
    scissorsElement.alt = ""
    scissorsElement.setAttribute("onclick", "rpsGame(this)")
    playAreaDiv.appendChild(rockElement)
    playAreaDiv.appendChild(paperElement)
    playAreaDiv.appendChild(scissorsElement)
}

// Challenge 4: Change button color
var all_buttons = document.getElementsByTagName('button')
var copyAllButtons = []
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1])
}

function buttonColorChange(btnObject) {
    if (btnObject.value === 'red') {
        buttonsRed()
    } else if (btnObject.value === 'green') {
        buttonsGreen()
    } else if (btnObject.value === 'random') {
        buttonsRandom()
    } else {
        buttonsReset()
    }
}

function buttonsRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-danger')
    }
}

function buttonsGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-success')
    }
}

function buttonsRandom() {
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
    randomIndex = Math.floor(Math.random() * 4)
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(choices[randomIndex])
    }
}

function buttonsReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add(copyAllButtons[i])
    }
}

// Challenge 5: Blackjack
let blackjackGame = {
    'you': {
        'scoreSpan': '#your-blackjack-result',
        'div': '#your-box',
        'score': 0
    },
    'dealer': {
        'scoreSpan': '#dealer-blackjack-result',
        'div': '#dealer-box',
        'score': 0
    },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'K', 'Q']
}

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const HITSOUND = new Audio('static/sounds/swish.m4a')
const AWWSOUND = new Audio('static/sounds/aww.mp3')
const CASHSOUND = new Audio('static/sounds/cash.mp3')
const BLACKJACKRESULTDIV = document.querySelector("#blackjack-result")

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit)
document.querySelector('#blackjack-stand-button').addEventListener('click', blackjackStand)
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal)

function blackjackHit() {
    drawCards('you')
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13)
    return blackjackGame['cards'][randomIndex]
}

function showCard(activePlayer, card) {
    let cardImage = document.createElement('img')
    cardImage.src = `./static/images/${card}.png`
    document.querySelector(activePlayer['div']).appendChild(cardImage)
    HITSOUND.play()
}

function blackjackStand() {
    drawCards('dealer')
}

function blackjackDeal() {
    let yourImages = document.querySelector('#your-box').querySelectorAll('img')
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img')
    for (let i = 0; i < yourImages.length; i++) {
        yourImages[i].remove()
    }
    for (let i = 0; i < dealerImages.length; i++) {
        dealerImages[i].remove()
    }
    blackjackGame['you']['score'] = 0
    blackjackGame['dealer']['score'] = 0
}

function drawCards(player) {
    if (blackjackGame[player]['score'] <= 21) {
        let card = randomCard()
        switch (card) {
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '10':
                blackjackGame[player]['score'] = blackjackGame[player]['score'] + parseInt(card)
                break
            case 'J':
            case 'Q':
            case 'K':
                blackjackGame[player]['score'] = blackjackGame[player]['score'] + 10
                break
            case 'A':
                if (blackjackGame[player]['score'] + 11 > 21) {
                    blackjackGame[player]['score'] = blackjackGame[player]['score'] + 1
                } else {
                    blackjackGame[player]['score'] = blackjackGame[player]['score'] + 11
                }
                break
            default:
                break
        }
        showCard(blackjackGame[player], card)
        if (blackjackGame[player]['score'] > 21) {
            document.querySelector(blackjackGame[player]['scoreSpan']).textContent = 'BUST'
            if (player == 'you') {
                BLACKJACKRESULTDIV.style = "color: red"
                BLACKJACKRESULTDIV.textContent = 'YOU LOSE!'
                AWWSOUND.play()
            } else {
                BLACKJACKRESULTDIV.style = "color: green"
                BLACKJACKRESULTDIV.textContent = 'YOU WIN!'
                CASHSOUND.play()
            }
        } else {
            document.querySelector(blackjackGame[player]['scoreSpan']).textContent = blackjackGame[player]['score']
        }
    } else {

    }
}
