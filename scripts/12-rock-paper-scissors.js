let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

let isAutoPlaying = false;
let intervalId;

document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('Rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('Paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('Scissors');
});

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('Rock');
    } else if (event.key === 'p') {
        playGame('Paper');
    } else if (event.key === 's') {
        playGame('Scissors');
    }
});
updateScoreDisplay();
function playGame(userMove) {

    const random = Math.random();
    let computerMove = '';
    if (random < 0.33) {
        computerMove = 'Rock';
    } else if (random < 0.66) {
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissors';
    }
    console.log('Computer move:', computerMove);

    let result = '';
    if (computerMove === userMove) {
        result = "It's a tie!";
    } else if (
        (computerMove === 'Rock' && userMove === 'Scissors') ||
        (computerMove === 'Paper' && userMove === 'Rock') ||
        (computerMove === 'Scissors' && userMove === 'Paper')
    ) {
        result = "Computer wins!";
    } else {
        result = "You win!";
    }
    if (result === 'You win!') {
        score.wins += 1;
    } else if (result === 'Computer wins!') {
        score.losses += 1;
    } else {
        score.ties += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-result')
        .innerHTML = result;
    document.querySelector('.js-moves')
        .innerHTML = `You <img src="Images/${userMove.toLowerCase()}-emoji.png" class="move-icon"> Computer <img
            src="Images/${computerMove.toLowerCase()}-emoji.png" class="move-icon"></p>`;

    updateScoreDisplay();

}
function resetGame() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreDisplay();
}
function updateScoreDisplay() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins} , Losses: ${score.losses} , Ties: ${score.ties}`;
}

function pickComputerMove() {
    const random = Math.random();
    if (random < 0.33) {
        return 'Rock';
    } else if (random < 0.66) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function autoPlay() {
    if (!isAutoPlaying) {

        intervalId = setInterval(() => {
            const playermove = pickComputerMove();
            playGame(playermove);
        }, 1000);
        isAutoPlaying = true;
    }
    else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }

}

