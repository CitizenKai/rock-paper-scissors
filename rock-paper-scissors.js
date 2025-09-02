let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    randomNumber = Math.random();
        if (randomNumber <= 0.3333333333333333) {
            computerChoice = "rock";
        } else if (randomNumber >= 0.6666666666666667) {
            computerChoice = "scissors"
        } else {
            computerChoice = "paper"
        }
        return computerChoice
    }

function getHumanChoice() {
    humanChoice = prompt('Hello player, make your choice: "rock", "paper", or "scissors"?')
    return humanChoice
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Let's do this again!")
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose, paper beats rock");
        computerScore = +1
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win, rock breaks scissors. Yeah!");
        humanScore = +1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win, paper wraps the stone.");
        humanScore = +1
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("Oh no, you lose, Scissors cut paper.");
        computerScore = +1;
    } else if (humanChoice = "scissors" && computerChoice === "rock") {
        console.log("NOOOOO! The rock just broke your scissors!");
        computerScore = +1;
    } else if (humanChoice = "scissors" && computerChoice === "paper") {
        console.log("YES! You win. You just cut the paper.");
        humanScore = +1;
    }
        console.log(humanScore);
        console.log(computerScore);
    }   

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection)