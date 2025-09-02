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
