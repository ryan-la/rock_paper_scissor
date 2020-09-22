const rps = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function computerPlay() {
    let pickRandom = Math.floor(Math.random() * rps.length)
    return rps[pickRandom];
}

function playRound() {
    const playerSelection = prompt("Rock, Paper, or Scissors").toLowerCase()
    const computerSelection = computerPlay()

    function playerWins() {
        console.log(`Player wins! You played ${playerSelection} and the computer played ${computerSelection}`)
        playerScore++;
    }

    function computerWins() {
        console.log(`Computer wins! The computer played ${computerSelection} and you played ${playerSelection}`)
        computerScore++;
    }

    function neitherWins() {
        console.log("Tie!")
        tieScore++;
    }

    return ((playerSelection === computerSelection) ? neitherWins() :
        (playerSelection === "rock" && computerSelection === "scissors") ? playerWins() :
            (playerSelection === "rock" && computerSelection === "paper") ? computerWins() :
                (playerSelection === "paper" && computerSelection === "rock") ? playerWins() :
                    (playerSelection === "paper" && computerSelection === "scissors") ? computerWins() :
                        (playerSelection === "scissors" && computerSelection === "paper") ? playerWins() : computerWins()
    )
}

function game() {
    let gameLength = Number(prompt("How many rounds would you like to play?"))
    for (let i = 0; i < gameLength; i++) {
        playRound();
    }
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
    console.log("Tie: " + tieScore);
}

console.log("Type \"game()\" to play")

