
  let playerScore = 0
  let computerScore = 0

function playRound() {
  const gameOptions = ["rock", "paper", "scissors"];
  const computerChoice = Math.floor(Math.random() * gameOptions.length)
  let computer = gameOptions[computerChoice]
  let playerChoice = prompt("Best out of 5! Rock, Paper, or Scissors?")
  let player1 = playerChoice.toLowerCase()

  if (player1 === computer) {
    console.log("Tie")
  } else if (player1 === "rock" && computer === "paper") {
    computerScore++;
    console.log(`Paper beats your bitch ass Rock, you lose!!! Score: Player:${playerScore}, Computer:${computerScore}` )
  } else if (player1 === "rock" && computer === "scissors") {
    playerScore++;
    console.log(`Rock beats Scissors! You crushed it! Score: Player:${playerScore}, Computer:${computerScore}`)
  } else if (player1 === "paper" && computer === "rock") {
    playerScore++;
    console.log(`Paper beats Rock! Wrap it up!! Score: Player:${playerScore}, Computer:${computerScore}`)
  } else if (player1 === "paper" && computer === "scissors") {
    computerScore++;
    console.log(`Scissors cuts Paper! You lose big time!!! Score: Player:${playerScore}, Computer:${computerScore}`)
  } else if (player1 === "scissors" && computer === "rock") {
    computerScore++;
    console.log(`Rock crushes your Scissors! Ouch! Score: Player:${playerScore}, Computer:${computerScore}`)
  } else if (player1 === "scissors" && computer === "paper") {
    playerScore++;
    console.log(`Scissors cuts Paper! It's super effective! Score: Player:${playerScore}, Computer:${computerScore}`)
  }
}


function game() {
  for (let i = 0; i <= 5; i++) {
    if (i === 5) {
      console.log(`Game Over. Final score: Player:${playerScore}, Computer:${computerScore}`);
    } else {
      playRound()
    }
  }
}


game()