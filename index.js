let humanScore = 0;
let botScore = 0;
playGame();
function playGame() {
    let i = 5;
    while(i>0) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
        i--;
    }
    console.log(humanScore);
    console.log(botScore);
    if(humanScore>botScore) {
        console.log("Congrats, Human is the winner");
    }
    else {
        console.log("Congrats, Computer is the winner");
    }
}
function playRound(humanChoice,computerChoice) {
    if(humanChoice == computerChoice.toLowerCase()) {
        console.log("It's a tie");
    }
    else if(
        (humanChoice == "rock" && computerChoice == "Scissors") ||
        (humanChoice == "scissors" && computerChoice == "Paper") ||
        (humanChoice == "paper" && computerChoice == "Rock")
    ) {
        humanScore+=1;
        console.log("Human wins this round");
    }
    else {
        botScore+=1;
        console.log("Computer wins this round");
    }
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0 : return "Rock";
        case 1 : return "Paper";
        case 2 : return "Scissors";
    }
}

function getHumanChoice() {
    const enteredChoice = prompt("Enter your choice:");
    return enteredChoice.toLowerCase();
}

