// Challenge 1: Your age in days

function ageInDays() {
    var birthYear = prompt('What year were you born in?')
    // var birthMonth = prompt('What month were you born in?')
    // var birthDate = prompt('What day of the month were you born on?')
    var ageDays = (2018 - birthYear) * 265
    var h1 = document.createElement('h1')
    var textAnswer = document.createTextNode('You are ' + ageDays + ' days old.')
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1)
    console.log(ageDays)
}

function reset() {
    document.getElementById('ageInDays').remove()
}
