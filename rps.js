
let playerScore = 0;
let computerScore = 0;
let draw = 0;    
const randomChoice = ["Rock", "Paper", "Scissors"]
function computerPlay(randomChoice)
{
    return randomChoice[Math.floor(Math.random()*randomChoice.length)];
}

 function playRound(playerSelection, computerSelection) 
{
    if(playerSelection.toLowerCase() === "Rock".toLowerCase() )
    {
        if( computerSelection === "Rock")
        {
            draw++;
            return "It's a tie!";
        }
        else if(computerSelection === "Paper")
        {
            computerScore++;
            return "You lose!";
        }
        else (computerSelection === "Scissors")
        {
            playerScore++;
            return "You win!";  
        } 
    }
    else if (playerSelection.toLowerCase() === "Paper".toLowerCase())
    {
        if(computerSelection === "Paper")
        {
            draw++;
            return "It's a tie!";
        }
        else if(computerSelection === "Rock")
        { 
            playerScore++;
            return "You win!";
        }
        else (computerSelection === "Scissors")
        {
            computerScore++;
            return "You lose!";
        }
    }
    else (playerSelection.toLowerCase() === "Scissors".toLowerCase())
    {
        if(computerSelection === "Scissors")
        {
            draw++;
            return "It's a tie!";
        }
        else if(computerSelection === "Rock")
        {
            computerScore++;
            return "You lose!";
        }
        else (computerSelection === "Paper")
        {
            playerScore++;
            return "You win!";
        }
    }
}


 function game()
 {
     
     for(let i = 0; i < 5; i++) 
     {
         let playerSelection = prompt('Rock, Paper, or Scissors?');
         const computerSelection = computerPlay(randomChoice);
         console.log(playRound(playerSelection, computerSelection));
         console.log(playerScore + " Player");
         console.log(computerScore + " Computer");
         console.log(draw + " Draw")
     }
     
}
function theWinner()
{

    if (playerScore > computerScore)
    {
         return console.log("You are the winner!");
    }
    else if( playerScore < computerScore)
    {
         return console.log("You are the Loser!");
    }
    else
    {
         return console.log("It's a draw!");
    }
}

game();
theWinner();






        

         

