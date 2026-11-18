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

function resetActionState(newState) {
    actionState = newState;
    selectionState = {};
    [btnMove, btnSplit, btnSplitMove].forEach(b => b.classList.remove('active'));

    if (newState === 'move') {
        btnMove.classList.add('active');
        instructionPanel.innerText = "Select a piece, then select a destination square.";
    } else if (newState === 'split') {
        btnSplit.classList.add('active');
        instructionPanel.innerText = "Click one of your pieces to split it.";
    } else if (newState === 'split_move') {
        btnSplitMove.classList.add('active');
        instructionPanel.innerText = "Select the REAL piece to move.";
    }
    renderBoard();
}

btnMove.addEventListener('click', () => resetActionState('move'));
btnSplit.addEventListener('click', () => resetActionState('split'));
btnSplitMove.addEventListener('click', () => resetActionState('split_move'));
devModeSelect.addEventListener('change', refreshState);

btnReset.addEventListener('click', () => {
    ChessLogic.resetBoard();
    winnerIndicator.classList.add('hidden');
    resetActionState('move');
    refreshState();
});

ChessLogic.resetBoard();
refreshState();
