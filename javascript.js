let score = 0
let scoreElement = document.getElementById("score");
let playerMove = document.getElementById("player-move");
let computer_move = document.getElementById('computer-move');
let resultsElement = document.getElementById("results");

btnRock.addEventListener('click', function(){
    let results = playRound('Rock')
    console.log(results)
    playerMove.innerHTML = "<img src='rock.svg'>"
    computer_move.innerHTML = "<img src='" + results[2].toLowerCase() + ".svg'>"
    console.log("<img src='" + results[2] + "'.svg'>")
    resultsElement.textContent = 'Results: ' + results[0]
    if (results[0] == 'Win') {
        score += 1
    }
    if (results[0] == 'Loss') {
        score = 0
    }
    scoreElement.textContent = "Score: " + score;

});
btnPaper.addEventListener('click', function(){
    let results = playRound('Paper')
    console.log(results)
    playerMove.innerHTML = "<img src='paper.svg'>"
    computer_move.innerHTML = "<img src='" + results[2].toLowerCase() + ".svg'>"
    console.log("<img src='" + results[2] + "'.svg'>")
    resultsElement.textContent = 'Results: ' + results[0]
    if (results[0] == 'Win') {
        score += 1
    }
    if (results[0] == 'Loss') {
        score = 0
    }
    scoreElement.textContent = "Score: " + score;

});
btnScissors.addEventListener('click', function(){
    let results = playRound('Scissors')
    console.log(results)
    playerMove.innerHTML = "<img src='scissors.svg'>"
    computer_move.innerHTML = "<img src='" + results[2].toLowerCase() + ".svg'>"
    console.log("<img src='" + results[2] + "'.svg'>")
    resultsElement.textContent = 'Results: ' + results[0]
    if (results[0] == 'Win') {
        score += 1
    }
    if (results[0] == 'Loss') {
        score = 0
    }
    scoreElement.textContent = "Score: " + score;

});











function computerMove() {
    let number = Math.floor(Math.random() * 101) // Random number between 0 - 100
    let move;
    if (number <= 33) {
        move = 'Rock'
    } else if (number > 66) {
        move = 'Paper'
    } else {
        move = 'Scissors'
    };
    return move;
    
}

function playRound(user_move) {
    com_move = computerMove()
    let result;
    let gameDone = false;
    while (gameDone == false){
        if (user_move == "Rock") {
            if (com_move == "Rock") {
                result = "Draw"
                gameDone = true;
            } else if (com_move == "Paper"){
                result = "Loss"
                gameDone = true;
            } else {
                result = "Win"
                gameDone = true;
            }
        } else if (user_move == "Paper"){
            if (com_move == "Rock") {
                result = "Win"
                gameDone = true;
            } else if (com_move == "Paper"){
                result = "Draw"
                gameDone = true;
            } else {
                result = "Loss"
                gameDone = true;
            }
        } else {
            if (com_move == "Rock") {
                result = "Loss"
                gameDone = true;
            } else if (com_move == "Paper"){
                result = "Win"
                gameDone = true;
            } else {
                result = "Draw"
                gameDone = true;
            }
        }
    }
    return ([result, user_move, com_move])
}




