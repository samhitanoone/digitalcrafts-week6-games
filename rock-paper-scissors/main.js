var content = document.getElementById('content');

content.innerHTML = renderGame();

function playerChooses(turn) {
    //console.log(turn);  
    playerChoice = turn;
    //console.log(playerChoice);
    var gameOptions = ["Rock", "Paper", "Scissors"];
    computerChoice = gameOptions[Math.floor(Math.random()*gameOptions.length)];
    //console.log(computerChoice);
    var rockPaperScissors = [playerChoice, computerChoice]
    var winner = determineWinner(playerChoice, computerChoice)
    results.innerHTML = renderResults(rockPaperScissors, winner);
};

function determineWinner (playerChoice, computerChoice) {
    if (playerChoice === computerChoice){
        return 'TIE';
    }
    else if ( playerChoice === "Rock" ) {
        if (computerChoice === "Scissors") { return "You win!"}
        else if (computerChoice === "Paper") {return "Computer wins!"}
    }
    else if ( playerChoice === "Paper" ) {
        if (computerChoice === "Scissors") { return "Computer wins!"}
        else if (computerChoice === "Rock") {return "You win!"}
        }
    else if ( playerChoice === "Scissors" ) {
        if (computerChoice === "Rock") { return "Computer wins!"}
        else if (computerChoice === "Paper") {return "You win!"}
    }
};

function renderGame() {
    // Change this render function to use the "game" parameter

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>Choose your weapon:</h4>
            <div class="w-50 text-center">
                <button class="btn btn-primary" onclick = "playerChooses('Rock')">Rock</button>
                <button class="btn btn-primary" onclick = "playerChooses('Paper')">Paper</button>
                <button class="btn btn-primary" onclick = "playerChooses('Scissors')">Scissors</button>
            </div>
        </div>
    `
};

function renderResults(game, winner) {
    // Change this render function to use the "game" parameter

    return `
            <div class="d-flex justify-content-center">
                <div class="m-5">You played: <b>${game[0]}</b></div>
                <div class="m-5">The computer played: <b>${game[1]}</b></div>
            </div>
            <h1 class="text-center">${winner}</h1>
    `
};