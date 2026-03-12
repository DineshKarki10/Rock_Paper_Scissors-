let user = 0;
let comp= 0;
let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user");
const compscore = document.querySelector("#comp");
const reset = document.querySelector("#re");

reset.addEventListener("click", () => {
    user = 0;
    comp = 0;
    userscore.innerText = user;
    compscore.innerText = comp;
    msg.innerText = ("Let's Play again!!");
    msg.style.backgroundColor = "purple";
});

choices. forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});

const playGame = (userchoice) => {
    const compChoice = gencompChoice();
    if(userchoice===compChoice) {
        draw();
    } else {
        let userwin = true;
        if(userchoice==="rock") {
            //paper,scissors
            userwin = compChoice === "paper" ? false : true;
        } else if ( userchoice==="paper") {
            //rock, scisssors
            userwin= compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
           userwin = compChoice=== "rock" ? false : true;
        }
        showWinner(userwin, userchoice, compChoice);
    }
};

const showWinner = (userwin, userchoice, compChoice)=> {
    if(userwin) {
        user++;
        userscore.innerText = user;
        msg.innerText = `You won!!! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        comp++;
        compscore.innerText = comp;
        msg.innerText = `You lost!!! ${compChoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const draw = () => {
    msg.innerText = `Draw!!! ${compChoice} is equal to your ${userchoice}`;
    msg.style.backgroundColor = "purple";
};

const gencompChoice = () => {
    const options = ["rock","paper","scissors"];
    let randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};