const gameOptions = ["rock", "paper", "scissors"];
const computerChoice = Math.floor(Math.random() * gameOptions.length)

let computer = gameOptions[computerChoice]

let playerChoice = prompt("Rock, Paper, or Scissors?")

let player1 = playerChoice.toLowerCase()

console.log(player1, computer)

function playRound() {
  if (player1 === computer) {
    console.log("I'ts a fucking tie bitch")
  } else if (player1 === "rock" && computer === "paper") {
    console.log("Paper beats your bitch ass Rock, you lose!!!")
  } else if (player1 === "rock" && computer === "scissors") {
    console.log("Rock beats Scissors! You crushed it!")
  } else if (player1 === "paper" && computer === "rock") {
    console.log("Paper beats Rock! Wrap it up!!")
  } else if (player1 === "paper" && computer === "scissors") {
    console.log("Scissors cuts Paper! You lose big time!!!")
  } else if (player1 === "scissors" && computer === "rock") {
    console.log("Rock crushes your Scissors! Ouch!")
  } else if (player1 === "scissors" && computer === "paper") {
    console.log("Scissors cuts Paper! It's super effective!")
  }
}

playRound()