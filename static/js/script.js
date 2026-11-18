const boardEl = document.getElementById('chessboard');
const turnIndicator = document.getElementById('turn-indicator');
const devModeSelect = document.getElementById('dev-mode');
const instructionPanel = document.getElementById('instruction-panel');
const winnerIndicator = document.getElementById('winner-indicator');

const btnMove = document.getElementById('btn-move');
const btnSplit = document.getElementById('btn-split');
const btnSplitMove = document.getElementById('btn-split-move');
const btnReset = document.getElementById('btn-reset');

let currentBoard = [];
let turn = 'W';
let actionState = 'move';
let selectionState = {};

function getPythonCoords(r, c) {
    if (devModeSelect.value === 'false' && turn === 'W') {
        return [8 - r, 8 - c];
    } else {
        return [r + 1, c + 1];
    }
}

function getImagePath(pieceName) {
    if (pieceName === '--0--') return null;

    const parts = pieceName.split('_');
    const type = parts[0];
    const team = parts[1];
    const isSplit = pieceName.endsWith('_S');

    const fileName = `${type}_${team}${isSplit ? '_S' : ''}.png`;
    return `../static/img/${fileName}`;
}

function getState(devMode) {
    const currentTurn = ChessLogic.getTurn();
    let board;

    if (devMode === 'true') {
        board = ChessLogic.showTrue();
    } else if (currentTurn === 'W') {
        board = ChessLogic.showW();
    } else {
        board = ChessLogic.showB();
    }

    return {
        turn: currentTurn,
        winner: ChessLogic.getWinner(),
        board: board
    };
}


function refreshState() {
    const devMode = devModeSelect.value;
    const data = getState(devMode);

    const previousTurn = turn;

    currentBoard = data.board;
    turn = data.turn;

    if (previousTurn !== turn) {
        resetActionState('move');
    }

    turnIndicator.innerText = `Turn: ${turn === 'W' ? 'White' : 'Black'}`;
    if (data.winner) {
        winnerIndicator.innerText = `${data.winner === 'W' ? 'White' : 'Black'} WINS!`;
        winnerIndicator.classList.remove('hidden');
    } else {
        winnerIndicator.classList.add('hidden');
    }
    renderBoard();
}


function renderBoard() {
    boardEl.innerHTML = '';
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const square = document.createElement('div');
            square.className = `square ${(r + c) % 2 === 0 ? 'light' : 'dark'}`;
            square.dataset.r = r;
            square.dataset.c = c;

            const pieceName = currentBoard[r][c];
            if (pieceName !== '--0--') {
                square.dataset.piece = pieceName;
                const img = document.createElement('img');
                img.src = getImagePath(pieceName);
                img.className = 'piece-img';

                img.onerror = () => {
                    img.style.display = 'none';
                    square.innerText = pieceName;
                };
                square.appendChild(img);
            }

            if (selectionState.selectedSquare && selectionState.selectedSquare.r === r && selectionState.selectedSquare.c === c) {
                square.classList.add('selected');
            }
            if (selectionState.splitRealDest && selectionState.splitRealDest.r === r && selectionState.splitRealDest.c === c) {
                square.classList.add('highlight');
            }

            square.addEventListener('click', () => handleSquareClick(r, c, pieceName));
            boardEl.appendChild(square);
        }
    }
}