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

function playRound(playerSelectionAt, computerSelectionAt) {
    

    let result

    switch(playerSelectionAt - computerSelectionAt) {
        case 0:
            result = "equal"
            break;
        case -2:
        case 1:
            result = "win"
            break;
        case 2:
        case -1:
            result = "lose"
            break;
    }
    return result
   
}

function findIndexOf(word) {
    const capitalized = word.charAt(0).toUpperCase()  + word.slice(1)
    let index = options.indexOf(capitalized)
    if (index < 0) {
        throw new Error("input error")
    }
    return index
}

let youWin = 0, computerWin = 0
function startOld() {
    for (let i = 0; i < 5; i++) {
        let input = prompt("please input your guess")
        let playerSelectionAt = findIndexOf(input)
        let computerSelectionAt = findIndexOf(getComputerChoice())
        let statementRound
        switch(playRound(playerSelectionAt, computerSelectionAt)) {
            case "equal":
                youWin += 0.5
                computerWin += 0.5
                statementRound = `You are even! ${options[playerSelectionAt]} equals ${options[computerSelectionAt]}`
                break
            case "win":
                youWin++
                statementRound = `You Win! ${options[playerSelectionAt]} beats ${options[computerSelectionAt]}`
                break
            case "lose":
                statementRound = `You Lose! ${options[computerSelectionAt]} beats ${options[playerSelectionAt]}`
                computerWin++
                break
    
        }
        console.log(statementRound)
    }
}
let result = document.querySelector("#result");
let match = (button) => {
    let matchClick = (e) => {
        console.log(button.textContent);
        let playerSelectionAt = findIndexOf(button.textContent);
        let computerSelectionAt = findIndexOf(getComputerChoice());
        let statementRound
        switch(playRound(playerSelectionAt, computerSelectionAt)) {
            case "equal":
                youWin += 0.5
                computerWin += 0.5
                statementRound = `You are even! ${options[playerSelectionAt]} equals ${options[computerSelectionAt]}`
                break
            case "win":
                youWin++
                statementRound = `You Win! ${options[playerSelectionAt]} beats ${options[computerSelectionAt]}`
                break
            case "lose":
                statementRound = `You Lose! ${options[computerSelectionAt]} beats ${options[playerSelectionAt]}`
                computerWin++
                break
    
        }
        let divResult = document.createElement('p');
        divResult.textContent = statementRound;
        result.append(divResult);
        console.log(statementRound);
        console.log(`${youWin} : ${computerWin}`);
        if (youWin >=5 || computerWin >=5 ) {
            document.querySelectorAll('button').forEach(button => {
                button.removeEventListener('click', matchClick);
                console.log("match done");
            });
            let totalResult = document.createElement('p');
            totalResult.textContent = "match done " + `${youWin} : ${computerWin}`
            result.append(totalResult);
        }
    }
    return matchClick;
    
};
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', match(button));
})

if (youWin > computerWin) {
    console.log(`You win! ${youWin} : ${computerWin}`)
} else if (youWin === computerWin) {
    console.log(`You are even! ${youWin} : ${computerWin}`)
} else {
    console.log(`You lose! ${youWin} : ${computerWin}`)

}