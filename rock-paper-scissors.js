console.log("Hello World")

/* Logic to get the computer choice:
Create a new function named getComputerChoice.
Create a variable randomNumber to store the result of the random number generator
Generate a random number between 0 and 1.
If random number is <=0.3333333333333333 then "rock"
Else if random number is >=0.6666666666666667 then "scissors"
Else "paper"
Create variable computerChoice
Return computerChoice */

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