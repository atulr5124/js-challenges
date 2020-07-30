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