const statusDisplay = document.querySelector('.game--status');

// var nameUser = prompt('Elije nombre jugador 1', "")
// var nameUser2 = prompt('Elije nombre jugador 2', "")


let gameActive = true;
let currentPlayer = "X";
let gameState = ["","","","","","","","","","","","","","","",];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

const winningConditions = [
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [6, 7, 8, 9],
    [7, 8, 9, 10],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [13, 14, 15, 16],
    [14, 15, 16, 17],
    [18, 19, 20, 21],
    [19, 20, 21, 22],
    [20, 21, 22, 23],
    [0, 7, 14, 21],
    [1, 8, 15, 22],
    [2, 9, 16, 23],
    [3, 8, 13, 18],
    [4, 9, 14, 19],
    [5, 10, 15, 20],
    [0, 6, 12, 18],
    [1, 7, 13, 19],
    [2, 8, 14, 20],
    [3, 9, 15, 21],
    [4, 10, 16, 22],
    [5, 11, 17, 23],    
];

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 23; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        let d = gameState[winCondition[3]];
        let e = gameState[winCondition[4]];
        let f = gameState[winCondition[5]];
        let g = gameState[winCondition[6]];
        let h = gameState[winCondition[7]];
        let j = gameState[winCondition[8]];
        let k = gameState[winCondition[9]];
        let l = gameState[winCondition[10]];
        let m = gameState[winCondition[11]];
        let n = gameState[winCondition[12]];
        let o = gameState[winCondition[13]];
        let p = gameState[winCondition[14]];
        let q = gameState[winCondition[15]];
        let r = gameState[winCondition[16]];
        let s = gameState[winCondition[17]];
        let t = gameState[winCondition[18]];
        let u = gameState[winCondition[19]];
        let v = gameState[winCondition[20]];
        let w = gameState[winCondition[21]];
        let x = gameState[winCondition[22]];
        let y = gameState[winCondition[23]];

        if (a === '' || b === '' || c === ''|| d === '' || e === '' || f === ''|| g === '' || h === ''|| j === '' 
        || k === '' || l === ''|| m === ''|| n === '' || o === ''|| p === '' || q === '' || r === ''|| s === ''|| 
        t === '' || u === ''|| v === ''|| w === '' || x === ''|| y === '') {
            continue;
        }
        if (roundWon = true) {
            break;
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", "","", "", "", "", "", "", "", "", "","", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);