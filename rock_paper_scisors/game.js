console.log("hello");

let options = ["Rock", "Paper", "Scissors"];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function getComputerChoice() {
    return options[getRandomIntInclusive(0, 2)]
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionAt = findIndexOf(playerSelection)
    let computerSelectionAt = findIndexOf(computerSelection)

    let result = playerSelectionAt - computerSelectionAt
    let statement

    switch(result) {
        case 0:
            statement = "You are even!"
            break;
        case -2:
        case 1:
            statement = "You Win!"
            break;
        case 2:
        case -1:
            statement = "You Lose!"
            break;
    }
    return statement
   
}

function findIndexOf(word) {
    const capitalized = word.charAt(0).toUpperCase()  + word.slice(1)
    let index = options.indexOf(capitalized)
    if (index < 0) {
        throw new Error("input error")
    }
    return index
}

for (let i = 0; i < 5; i++) {
    console.log(playRound("Rock", getComputerChoice()))
}