let computerPick = ["Earth Strike", "Electric Flash", "Water Whip"];
let historyList = document.querySelector("#historyList");
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
let newPlayerScore = 0;
let newComputerScore = 0;

let rounds = document.querySelector("#rounds");
let newRounds = 0;


//earth strike function
let earthBtn = document.querySelector("#earthBtn");
earthBtn.addEventListener("click", earthFunction);


function earthFunction() {
    let i = Math.floor(Math.random() * 3);
    let historyItem = document.createElement("li");
    let who = document.getElementById("who");
    
    if (i == 0) {
        document.getElementById("who").innerHTML = "Draw";
        who.style.color = "gray";
        document.getElementById("select").innerHTML = "Earth Strike vs. Earth Strike";

        
        if (newPlayerScore == 5) {
            confirm("Game Over! You win!")
            window.location.reload();

        } else if (newComputerScore == 5) {
            confirm("Game Over! You Lost!")
            window.location.reload();
        }

        //rounds
        newRounds++;
        rounds.textContent = newRounds;

        setTimeout(() => {
            document.getElementById("who").innerHTML = "ATTACK!";
            who.style.color = "#640D74";
            document.getElementById("select").innerHTML = "CHOOSE NOW!";
        }, 1000);

    } else if (i == 1 ) {
        document.getElementById("who").innerHTML = "Victory!";
        who.style.color = "#02AE00";
        document.getElementById("select").innerHTML = "Earth Strike vs. Electric Flash";

        //scoring
        newPlayerScore++;
        playerScore.textContent = newPlayerScore;

        if (newPlayerScore == 5) {
            confirm("Game Over! You win!")
            window.location.reload();


        } else if (newComputerScore == 5) {
            confirm("Game Over! You Lost!")
            window.location.reload();
        }

        //rounds
        newRounds++;
        rounds.textContent = newRounds;

        setTimeout(() => {
            document.getElementById("who").innerHTML = "ATTACK!";
            who.style.color = "#640D74";
            document.getElementById("select").innerHTML = "CHOOSE NOW!";
        }, 1000);

    } else {
        document.getElementById("who").innerHTML = "Defeat";
        who.style.color = "#C00102";
        document.getElementById("select").innerHTML = "Earth Strike vs. Water Whip";
        
        //scoring
        newComputerScore++;
        computerScore.textContent = newComputerScore;

        if (newPlayerScore == 5) {
            confirm("Game Over! You win!")
            window.location.reload();

        } else if (newComputerScore == 5) {
            confirm("Game Over! You Lost!")
            window.location.reload();
        }

        //rounds
        newRounds++;
        rounds.textContent = newRounds;

        setTimeout(() => {
            document.getElementById("who").innerHTML = "ATTACK!";
            who.style.color = "#640D74";
            document.getElementById("select").innerHTML = "CHOOSE NOW!";
        }, 1000);

    }
}


//electric flash function
let electricBtn = document.querySelector("#electricBtn");
electricBtn.addEventListener("click", electricFunction);

function electricFunction() {
    let i = Math.floor(Math.random() * 3);
    let who = document.getElementById("who");

    if (i == 0) {
        document.getElementById("who").innerHTML = "Defeat";
        who.style.color = "#C00102";
        document.getElementById("select").innerHTML = "ELectric Flash vs. Earth Strike";
        
        //scoring
        newComputerScore++;
        computerScore.textContent = newComputerScore;

        if (newPlayerScore == 5) {
            confirm("Game Over! You win!")
            window.location.reload();

        } else if (newComputerScore == 5) {
            confirm("Game Over! You Lost!")
            window.location.reload();
        }

        //rounds
        newRounds++;
        rounds.textContent = newRounds;

        setTimeout(() => {
            document.getElementById("who").innerHTML = "ATTACK!";
            who.style.color = "#640D74";
            document.getElementById("select").innerHTML = "CHOOSE NOW!";
        }, 1000);

    } else if (i == 1) {
        document.getElementById("who").innerHTML = "Draw";
        who.style.color = "gray";
        document.getElementById("select").innerHTML = "ELectric Flash vs. Electric Flash";
        
        if (newPlayerScore == 5) {
            confirm("Game Over! You win!")
            window.location.reload();

        } else if (newComputerScore == 5) {
            confirm("Game Over! You Lost!")
            window.location.reload();
        }

        //rounds
        newRounds++;
        rounds.textContent = newRounds;

        setTimeout(() => {
            document.getElementById("who").innerHTML = "ATTACK!";
            who.style.color = "#640D74";
            document.getElementById("select").innerHTML = "CHOOSE NOW!";
        }, 1000);

    } else {
        document.getElementById("who").innerHTML = "Victory!";
        who.style.color = "#02AE00";
        document.getElementById("select").innerHTML = "ELectric Flash vs. Water Whip";

        //scoring
        newPlayerScore++;
        playerScore.textContent = newPlayerScore;

        if (newPlayerScore == 5) {
            confirm("Game Over! You win!")
            window.location.reload();


        } else if (newComputerScore == 5) {
            confirm("Game Over! You Lost!")
            window.location.reload();
        }

        //rounds
        newRounds++;
        rounds.textContent = newRounds;

        setTimeout(() => {
            document.getElementById("who").innerHTML = "ATTACK!";
            who.style.color = "#640D74";
            document.getElementById("select").innerHTML = "CHOOSE NOW!";
        }, 1000);
    }
}


//water whip function
let waterBtn = document.querySelector("#waterBtn");
waterBtn.addEventListener("click", waterFunction);

function waterFunction() {
    let i = Math.floor(Math.random() * 3);
    let who = document.getElementById("who");

    if (i == 0) {
        document.getElementById("who").innerHTML = "Victory!";
        who.style.color = "#02AE00";
        document.getElementById("select").innerHTML = "Water Whip vs. Earth Strike";

        //scoring
        newPlayerScore++;
        playerScore.textContent = newPlayerScore;

        if (newPlayerScore == 5) {
            confirm("Game Over! You win!")
            window.location.reload();


        } else if (newComputerScore == 5) {
            confirm("Game Over! You Lost!")
            window.location.reload();
        }

        //rounds
        newRounds++;
        rounds.textContent = newRounds;

        setTimeout(() => {
            document.getElementById("who").innerHTML = "ATTACK!";
            who.style.color = "#640D74";
            document.getElementById("select").innerHTML = "CHOOSE NOW!";
        }, 1000);

    } else if (i == 1) {
        document.getElementById("who").innerHTML = "Defeat";
        who.style.color = "#C00102";
        document.getElementById("select").innerHTML = "Water Whip vs. Electric Flash";
        
        //scoring
        newComputerScore++;
        computerScore.textContent = newComputerScore;

        if (newPlayerScore == 5) {
            confirm("Game Over! You win!")
            window.location.reload();

        } else if (newComputerScore == 5) {
            confirm("Game Over! You Lost!")
            window.location.reload();
        }

        //rounds
        newRounds++;
        rounds.textContent = newRounds;

        setTimeout(() => {
            document.getElementById("who").innerHTML = "ATTACK!";
            who.style.color = "#640D74";
            document.getElementById("select").innerHTML = "CHOOSE NOW!";
        }, 1000);

    } else {
        document.getElementById("who").innerHTML = "Draw";
        who.style.color = "gray";
        document.getElementById("select").innerHTML = "Water Whip vs. Water Whip";
        
        if (newPlayerScore == 5) {
            confirm("Game Over! You win!")
            window.location.reload();

        } else if (newComputerScore == 5) {
            confirm("Game Over! You Lost!")
            window.location.reload();
        }

        //rounds
        newRounds++;
        rounds.textContent = newRounds;

        setTimeout(() => {
            document.getElementById("who").innerHTML = "ATTACK!";
            who.style.color = "#640D74";
            document.getElementById("select").innerHTML = "CHOOSE NOW!";
        }, 1000);

    }
}



let newgameBtn = document.querySelector("#newgameBtn");
newgameBtn.addEventListener("click", newgameBtnFunction);

function newgameBtnFunction () {
    location.reload();
    return false;
}












