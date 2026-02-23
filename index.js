function add1(team = 'home') {
    const scoreElement = document.getElementById(`${team}-score`);
    let currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + 1;
}

function add2(team = 'home') {
    const scoreElement = document.getElementById(`${team}-score`);
    let currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + 2;
}

function add3(team = 'home') {
    const scoreElement = document.getElementById(`${team}-score`);
    let currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + 3;
}

function newGame() {
    document.getElementById('home-score').textContent = 0;
    document.getElementById('away-score').textContent = 0;
}