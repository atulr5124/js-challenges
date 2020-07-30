// Challenge 1: Your age in days

function ageInDays() {
    if(document.getElementById('ageInDays')) {
        document.getElementById('ageInDays').remove()
    }
    var birthYear = prompt('What year were you born in?')
    // var birthMonth = prompt('What month were you born in?')
    // var birthDate = prompt('What day of the month were you born on?')
    var currentYear = new Date().getFullYear()
    var ageDays = (currentYear - birthYear) * 265
    var h1 = document.createElement('h1')
    var textAnswer = document.createTextNode('You are ' + ageDays + ' days old.')
    h1.setAttribute('id','ageInDays');
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
    choices = ['rock','paper','scissors']
    botChoiceIndex = Math.floor(Math.random() * 3)
    return choices[botChoiceIndex]
 }

 function decideWinner(humanChoice, botChoice) {
    if ((humanChoice == "rock" && botChoice == "paper") || (humanChoice == "paper" && botChoice == "scissors") || (humanChoice == "scissors" && botChoice == "rock")) {
        return [0,1]
    } else if ((humanChoice == "rock" && botChoice == "scissors") || (humanChoice == "paper" && botChoice == "rock") || (humanChoice == "scissors" && botChoice == "paper")) {
        return [1,0]
    } else {
        return [1,1]
    }
 }

 function finalMessage(results) {
     if(results[0] == 0 && results[1] == 1) {
         return {
             "msg": "You lost!",
             "color": "red"
         }
     } else if (results[0] == 1 && results[1] == 0 ) {
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
     resultDiv.innerHTML = ""
     var humanChoiceImage = document.createElement('img')
     humanChoiceImage.src="./static/images/"+humanChoice+".png"
     var botChoiceImage = document.createElement('img')
     botChoiceImage.src = "./static/images/"+botChoice+".png"
     var resultsDeclaration = document.createElement('h2')
     resultsDeclaration.textContent = message.msg
     resultsDeclaration.style = "color:"+message.color
     resultDiv.appendChild(humanChoiceImage)
     resultDiv.appendChild(resultsDeclaration)
     resultDiv.appendChild(botChoiceImage)
 }