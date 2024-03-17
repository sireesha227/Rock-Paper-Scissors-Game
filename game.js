let userScore = 0;
let computerScore = 0;

const choices=document.querySelectorAll(".images");
const msg=document.querySelector("#message")

const userScorePara = document.querySelector("#user_score");
const computerScorePara = document.querySelector("#computer_score");

const genComputerChoice = () => {
    const options = ["rock","paper","scissors"]
    let index = Math.floor(Math.random() * 3);
    return options[index];

}

const drawGame = () => {
    console.log("Its a draw");
    msg.innerText = "It's a draw!!!";
    msg.style.backgroundColor = "violet";

}

const showWinner = (userWin,userChoice,computerChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerHTML = userScore;
        console.log("You win!");
        msg.innerText = `You Win!! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        console.log("You Lose!!");
        msg.innerText = `You Lose!! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }

}

const playgame = (userChoice) =>{
    console.log("User choice = ", userChoice);
    // Get the computerChoice
    const computerChoice = genComputerChoice();
    let userWin = false;

    if(userChoice === computerChoice){
        drawGame();
        
    }else{
        if((userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")){
            userWin = true;
        } else{
                userWin = false;
        } 
        showWinner(userWin,userChoice,computerChoice);
    } 
}
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked ",userChoice);
        playgame(userChoice);
    })
})