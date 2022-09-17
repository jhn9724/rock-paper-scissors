  let playerScore = 0;
  let computerScore = 0;
  let draw = 0;
//Function for randomizing computer's choice of Rock, Paper, Scissors
function computerPlay()
{
    let randomChoice = ["Rock", "Paper", "Scissors"]
    return randomChoice[Math.floor(Math.random()*randomChoice.length)];
}


//Function for playing an entire game of Rock, Paper, Scissors
 function game()
 {
        const buttons = document.querySelectorAll('input');
        buttons.forEach((input) => {
        input.addEventListener('click',()=>{
        playerSelection = input.className;
        const computerSelection = computerPlay();
        round.textContent = (playRound(playerSelection, computerSelection));
        pscore.textContent = "(" +playerScore + " Player) ";
        cscore.textContent = "(" +computerScore + " Computer) ";
        theWinner();
        })
})
 }
 //Function for playing a round of Rock, Paper, Scissors
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
 

//Creating div for displaying results
const container = document.querySelector('#container');
const div = document.createElement('div');
div.classList.add('div');
div.textContent = "Pick one";
container.append(div);
        const computerSelection = computerPlay();
//Turn console.log into DOM methods
         const results = document.querySelector('#results'); 
        //  console.log(playRound(playerSelection, computerSelection));
        const round = document.createElement('round');
        round.classList.add('div');
        results.append(round);
        //  console.log(playerScore + " Player");
        const pscore = document.createElement('pscore');
        pscore.classList.add('div');
        results.append(pscore);
        //  console.log(computerScore + " Computer");
        const cscore = document.createElement('cscore');
        cscore.classList.add('div');
        results.append(cscore);

        //create the Dom for the winning and losing screen
        const winner = document.createElement('winner');
        winner.classList.add('p');
        results.append(winner);
        const loser = document.createElement('loser');
        loser.classList.add('p');
        results.append(loser);

        // Function for calculating the and displaying the winner
function theWinner()
{

    if (playerScore == 5)
    {
          winner.textContent = "-You are the winner!";
          document.getElementById('rockbtn').disabled = true;
          document.getElementById('paperbtn').disabled = true;
          document.getElementById('scissorsbtn').disabled = true;


    }
    else if ( computerScore == 5)
    {
          loser.textContent = "-The computer wins!";
          document.getElementById('rockbtn').disabled = true;
          document.getElementById('paperbtn').disabled = true;
          document.getElementById('scissorsbtn').disabled = true;


    }
 
}
//calling functions
game();
// theWinner();
document.getElementById('playersChoice').innerHTML = "cow";

