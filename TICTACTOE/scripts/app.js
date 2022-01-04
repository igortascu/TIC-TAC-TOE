const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }

];

const PlayerConfig = document.getElementById('config-overlay');
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector('form');
const errorOutput = document.getElementById('config-errors');
const gameArea = document.getElementById('active-game');
const activePlayerName = document.getElementById("active-player-name");
const gameOverElement = document.getElementById('game-over');

const editP1 = document.getElementById('player1-edit');
const editP2 = document.getElementById('player2-edit');
const cancelBtn = document.getElementById('cancel-config');
const startGameBtn = document.getElementById('start-game-btn');
const gameFieldElements = document.querySelectorAll('#gameboard li');
const gameBoardElement = document.getElementById('gameboard');

editP1.addEventListener('click', openPlayerConfig);
editP2.addEventListener('click', openPlayerConfig);

cancelBtn.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

startGameBtn.addEventListener('click', startNewGame);

for(const gameFieldElement of gameFieldElements){
    gameFieldElement.addEventListener('click', selectGameField);
}