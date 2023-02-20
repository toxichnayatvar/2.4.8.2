function getRandomNumber(min, max) {
    return Math.floor((Math.random() * (max-min)) + min)
}

let names = ['Воображаемый друг 1', 'Воображаемый друг 2', 'Воображаемый друг 3', 'Воображаемый друг 4']
let nonames = ['Делать воображаемые дела 1', 'Спать', 'Прокрастинировать', 'Деградировать']

function geroin() {
    console.log(`${names[getRandomNumber(0, names.length)]} будет ${nonames[getRandomNumber(0, nonames.length)]}`)
}