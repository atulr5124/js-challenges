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
// Game variable
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
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'K', 'Q'],
    'aggScore': {
        'wins': 0,
        'losses': 0,
        'draws': 0
    }
}

let shouldDealerStop = false

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']
const HITSOUND = new Audio('static/sounds/swish.m4a')
const AWWSOUND = new Audio('static/sounds/aww.mp3')
const CASHSOUND = new Audio('static/sounds/cash.mp3')
const BLACKJACKRESULTDIV = document.querySelector("#blackjack-result")

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit)
document.querySelector('#blackjack-stand-button').addEventListener('click', blackjackStand)
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal)

// When hit button is clicked
function blackjackHit() {
    drawHitCards()
}

// Generate random card
function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13)
    return blackjackGame['cards'][randomIndex]
}

// Show a card on the board
function showCard(activePlayer, card) {
    let cardImage = document.createElement('img')
    cardImage.src = `./static/images/${card}.png`
    document.querySelector(activePlayer['div']).appendChild(cardImage)
    HITSOUND.play()
}

// When stand button is hit
function blackjackStand() {
    while (!shouldDealerStop) {
        drawStandCards()
    }
    if(blackjackGame['you']['score'] > blackjackGame['dealer']['score']) {
        BLACKJACKRESULTDIV.textContent = 'You won!'
        BLACKJACKRESULTDIV.style = 'color: green'
        CASHSOUND.play()
        updateScore(1)
    } else if (blackjackGame['you']['score'] < blackjackGame['dealer']['score']) {
        BLACKJACKRESULTDIV.textContent = 'You lost!'
        BLACKJACKRESULTDIV.style = 'color: red'
        AWWSOUND.play()
        updateScore(2)
    } else {
        BLACKJACKRESULTDIV.textContent = 'It\'s a tie!'
        BLACKJACKRESULTDIV.style = 'color: orange'
        updateScore(0)
    }
    document.querySelector('#blackjack-hit-button').disabled = true
}

// When deal button is hit
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
    document.querySelector(blackjackGame['you']['scoreSpan']).textContent = 0
    document.querySelector(blackjackGame['dealer']['scoreSpan']).textContent = 0
    document.querySelector('#blackjack-hit-button').disabled = false
    document.querySelector('#blackjack-stand-button').disabled = false
    shouldDealerStop = false
    BLACKJACKRESULTDIV.textContent = 'Let\'s Play!'
    BLACKJACKRESULTDIV.style = "color: black"
}

// Draw cards for the player
function drawHitCards() {
    let card = randomCard()
    if (blackjackGame['you']['score'] <= 21) {
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
                blackjackGame['you']['score'] = blackjackGame['you']['score'] + parseInt(card)
                showCard(blackjackGame['you'], card)
                break
            case 'J':
            case 'Q':
            case 'K':
                blackjackGame['you']['score'] = blackjackGame['you']['score'] + 10
                showCard(blackjackGame['you'], card)
                break
            case 'A':
                if (blackjackGame['you']['score'] + 11 > 21) {
                    blackjackGame['you']['score'] = blackjackGame['you']['score'] + 1
                    showCard(blackjackGame['you'], card)
                } else {
                    blackjackGame['you']['score'] = blackjackGame['you']['score'] + 11
                    showCard(blackjackGame['you'], card)
                }
                break
            default:
                break
        }
        if (blackjackGame['you']['score'] > 21) {
            document.querySelector(blackjackGame['you']['scoreSpan']).textContent = 'BUST'
            BLACKJACKRESULTDIV.style = "color: red"
            BLACKJACKRESULTDIV.textContent = 'YOU LOSE!'
            document.querySelector('#blackjack-stand-button').disabled = true
            AWWSOUND.play()
            updateScore(2)
        } else {
            document.querySelector(blackjackGame['you']['scoreSpan']).textContent = blackjackGame['you']['score']
        }
    } else {
        
    }
}

// Draw cards for the dealer
function drawStandCards() {
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
            if (blackjackGame['dealer']['score'] + parseInt(card) <= 21) {
                blackjackGame['dealer']['score'] += parseInt(card)
                showCard(blackjackGame['dealer'], card)
            } else {
                shouldDealerStop = true
                document.querySelector('#blackjack-stand-button').disabled = true
            }
            break
        case 'J':
        case 'K':
        case 'Q':
            if (blackjackGame['dealer']['score'] + 10 <= 21) {
                blackjackGame['dealer']['score'] += 10
                showCard(blackjackGame['dealer'], card)
            } else {
                shouldDealerStop = true
                document.querySelector('#blackjack-stand-button').disabled = true
            }
            break
        case 'A':
            if (blackjackGame['dealer']['score'] + 11 > 21) {
                if (blackjackGame['dealer']['score'] + 1 <= 21) {
                    blackjackGame['dealer']['score'] += 1
                    showCard(blackjackGame['dealer'], card)
                } else {
                    shouldDealerStop = true
                    document.querySelector('#blackjack-stand-button').disabled = true
                }
            } else {
                if (blackjackGame['dealer']['score'] + 11 <= 21) {
                    blackjackGame['dealer']['score'] += 11
                    showCard(blackjackGame['dealer'], card)
                } else {
                    shouldDealerStop = true
                    document.querySelector('#blackjack-stand-button').disabled = true
                }
            }
            break
        default:
            break
    }
    document.querySelector(blackjackGame['dealer']['scoreSpan']).textContent = blackjackGame['dealer']['score']
}

// Update score in score table
function updateScore(result) {
    if(result === 0) {
        blackjackGame['aggScore']['draws'] += 1
        document.querySelector('#draws').textContent = blackjackGame['aggScore']['draws']
    } else if (result === 1) {
        blackjackGame['aggScore']['wins'] += 1
        document.querySelector('#wins').textContent = blackjackGame['aggScore']['wins']
    } else if (result === 2) {
        blackjackGame['aggScore']['losses'] += 1
        document.querySelector('#losses').textContent = blackjackGame['aggScore']['losses']
    }
}
