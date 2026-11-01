let R_W_1 = {Pos: [1, 1], Team: "W", Name: "R_W_1", Type: "R", Beg: 1, Split: false, Real: true};
let R_W_2 = {Pos: [1, 8], Team: "W", Name: "R_W_2", Type: "R", Beg: 1, Split: false, Real: true};
let N_W_1 = {Pos: [1, 2], Team: "W", Name: "N_W_1", Type: "N", Split: false, Real: true};
let N_W_2 = {Pos: [1, 7], Team: "W", Name: "N_W_2", Type: "N", Split: false, Real: true};
let B_W_1 = {Pos: [1, 3], Team: "W", Name: "B_W_1", Type: "B", Split: false, Real: true};
let B_W_2 = {Pos: [1, 6], Team: "W", Name: "B_W_2", Type: "B", Split: false, Real: true};
let Q_W_1 = {Pos: [1, 5], Team: "W", Name: "Q_W_1", Type: "Q", Beg: 0, Split: false, Real: true};
let K_W_1 = {Pos: [1, 4], Team: "W", Name: "K_W_1", Type: "K", Beg: 1, Split: false, Real: true};

let P_W_1 = {Pos: [2, 1], Team: "W", Name: "P_W_1", Type: "P", Beg: 1, Split: false, Real: true};
let P_W_2 = {Pos: [2, 2], Team: "W", Name: "P_W_2", Type: "P", Beg: 1, Split: false, Real: true};
let P_W_3 = {Pos: [2, 3], Team: "W", Name: "P_W_3", Type: "P", Beg: 1, Split: false, Real: true};
let P_W_4 = {Pos: [2, 4], Team: "W", Name: "P_W_4", Type: "P", Beg: 1, Split: false, Real: true};
let P_W_5 = {Pos: [2, 5], Team: "W", Name: "P_W_5", Type: "P", Beg: 1, Split: false, Real: true};
let P_W_6 = {Pos: [2, 6], Team: "W", Name: "P_W_6", Type: "P", Beg: 1, Split: false, Real: true};
let P_W_7 = {Pos: [2, 7], Team: "W", Name: "P_W_7", Type: "P", Beg: 1, Split: false, Real: true};
let P_W_8 = {Pos: [2, 8], Team: "W", Name: "P_W_8", Type: "P", Beg: 1, Split: false, Real: true};

let R_B_1 = {Pos: [8, 1], Team: "B", Name: "R_B_1", Type: "R", Beg: 1, Split: false, Real: true};
let R_B_2 = {Pos: [8, 8], Team: "B", Name: "R_B_2", Type: "R", Beg: 1, Split: false, Real: true};
let N_B_1 = {Pos: [8, 2], Team: "B", Name: "N_B_1", Type: "N", Split: false, Real: true};
let N_B_2 = {Pos: [8, 7], Team: "B", Name: "N_B_2", Type: "N", Split: false, Real: true};
let B_B_1 = {Pos: [8, 3], Team: "B", Name: "B_B_1", Type: "B", Split: false, Real: true};
let B_B_2 = {Pos: [8, 6], Team: "B", Name: "B_B_2", Type: "B", Split: false, Real: true};
let Q_B_1 = {Pos: [8, 5], Team: "B", Name: "Q_B_1", Type: "Q", Beg: 0, Split: false, Real: true};
let K_B_1 = {Pos: [8, 4], Team: "B", Name: "K_B_1", Type: "K", Beg: 1, Split: false, Real: true};

let P_B_1 = {Pos: [7, 1], Team: "B", Name: "P_B_1", Type: "P", Beg: 1, Split: false, Real: true};
let P_B_2 = {Pos: [7, 2], Team: "B", Name: "P_B_2", Type: "P", Beg: 1, Split: false, Real: true};
let P_B_3 = {Pos: [7, 3], Team: "B", Name: "P_B_3", Type: "P", Beg: 1, Split: false, Real: true};
let P_B_4 = {Pos: [7, 4], Team: "B", Name: "P_B_4", Type: "P", Beg: 1, Split: false, Real: true};
let P_B_5 = {Pos: [7, 5], Team: "B", Name: "P_B_5", Type: "P", Beg: 1, Split: false, Real: true};
let P_B_6 = {Pos: [7, 6], Team: "B", Name: "P_B_6", Type: "P", Beg: 1, Split: false, Real: true};
let P_B_7 = {Pos: [7, 7], Team: "B", Name: "P_B_7", Type: "P", Beg: 1, Split: false, Real: true};
let P_B_8 = {Pos: [7, 8], Team: "B", Name: "P_B_8", Type: "P", Beg: 1, Split: false, Real: true};

let kings = {"W": K_W_1, "B": K_B_1};
let turn = "W";
let winner = null;
let active_piece = null;
let links = {};

let pieces = [R_W_1, N_W_1, B_W_1, K_W_1, Q_W_1, B_W_2, N_W_2, R_W_2,
          P_W_1, P_W_2, P_W_3, P_W_4, P_W_5, P_W_6, P_W_7, P_W_8,
          P_B_1, P_B_2, P_B_3, P_B_4, P_B_5, P_B_6, P_B_7, P_B_8,
          R_B_1, N_B_1, B_B_1, K_B_1, Q_B_1, B_B_2, N_B_2, R_B_2];

let board = [
    [R_W_1, N_W_1, B_W_1, K_W_1, Q_W_1, B_W_2, N_W_2, R_W_2],
    [P_W_1, P_W_2, P_W_3, P_W_4, P_W_5, P_W_6, P_W_7, P_W_8],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0'],
    [P_B_1, P_B_2, P_B_3, P_B_4, P_B_5, P_B_6, P_B_7, P_B_8],
    [R_B_1, N_B_1, B_B_1, K_B_1, Q_B_1, B_B_2, N_B_2, R_B_2]
];


function resetBoard() {
    turn = "W";
    winner = null;
    active_piece = null;
    if (Object.keys(links).length !== 0) {
        for (let key in links) delete links[key];
    }

    for (let i of pieces.slice()) {
        if (i.Split === true) {
            if ("Actual" in i) {
                delete i.Actual;
            }
        }
        if (i.Real === false) {
            pieces.splice(pieces.indexOf(i), 1);
        }
    }
    pieces.length = 0;

    board = Array.from({length: 8}, () => new Array(8).fill('0'));

    let initial_pieces = [R_W_1, N_W_1, B_W_1, K_W_1, Q_W_1, B_W_2, N_W_2, R_W_2,
                          P_W_1, P_W_2, P_W_3, P_W_4, P_W_5, P_W_6, P_W_7, P_W_8,
                          P_B_1, P_B_2, P_B_3, P_B_4, P_B_5, P_B_6, P_B_7, P_B_8,
                          R_B_1, N_B_1, B_B_1, K_B_1, Q_B_1, B_B_2, N_B_2, R_B_2];

    for (let p of initial_pieces) {
        p.Split = false;
        p.Real = true;
        if (["R", "K", "P"].includes(p.Type)) p.Beg = 1;
        if (p.Type === "Q") p.Beg = 0;
    }

    [R_W_1, N_W_1, B_W_1, K_W_1, Q_W_1, B_W_2, N_W_2, R_W_2].forEach((p, idx) => p.Pos = [1, idx + 1]);
    [P_W_1, P_W_2, P_W_3, P_W_4, P_W_5, P_W_6, P_W_7, P_W_8].forEach((p, idx) => p.Pos = [2, idx + 1]);
    [P_B_1, P_B_2, P_B_3, P_B_4, P_B_5, P_B_6, P_B_7, P_B_8].forEach((p, idx) => p.Pos = [7, idx + 1]);
    [R_B_1, N_B_1, B_B_1, K_B_1, Q_B_1, B_B_2, N_B_2, R_B_2].forEach((p, idx) => p.Pos = [8, idx + 1]);

    pieces.push(...initial_pieces);
    update();
}




function legalR(pos, coords, p) {
    let dify = pos[0] - coords[0];
    let difx = pos[1] - coords[1];
    let way = dify > 0 ? "N" : dify < 0 ? "S" : difx > 0 ? "W" : difx < 0 ? "E" : "";
    if (pos[0] === coords[0] && pos[1] !== coords[1]) return wayR(pos, coords, way);
    else if (pos[1] === coords[1] && pos[0] !== coords[0]) return wayR(pos, coords, way);
    return false;
}

function legalQ(pos, coords, p) {
    return legalB(pos, coords) || legalR(pos, coords, p);
}

function legalN(pos, coords) {
    if (pos[0] === coords[0] + 2 && [coords[1] + 1, coords[1] - 1].includes(pos[1])) return take(pos, coords);
    else if (pos[0] === coords[0] - 2 && [coords[1] + 1, coords[1] - 1].includes(pos[1])) return take(pos, coords);
    else if (pos[1] === coords[1] + 2 && [coords[0] + 1, coords[0] - 1].includes(pos[0])) return take(pos, coords);
    else if (pos[1] === coords[1] - 2 && [coords[0] + 1, coords[0] - 1].includes(pos[0])) return take(pos, coords);
    return false;
}

function legalB(pos, coords) {
    let dify = pos[0] - coords[0];
    let difx = pos[1] - coords[1];
    let wayY = dify > 0 ? "N" : dify < 0 ? "S" : "";
    let wayX = difx > 0 ? "W" : difx < 0 ? "E" : "";
    let way = wayY + wayX;
    if (Math.abs(pos[0] - coords[0]) === Math.abs(pos[1] - coords[1]) && pos[0] !== coords[0]) {
        return wayB(pos, coords, way);
    }
    return false;
}


function legalP(pos, coords, p) {
    if (p.Team === "W") {
        if (p.Pos[0] + 1 === coords[0] && [p.Pos[1] - 1, p.Pos[1] + 1].includes(coords[1])) return take(pos, coords);
        if (p.Beg === 1 && [coords[0] - 1, coords[0] - 2].includes(pos[0]) && pos[1] === coords[1]) return wayP(pos, coords, "W");
        else if (pos[0] === coords[0] - 1 && pos[1] === coords[1]) return wayP(pos, coords, "W");
    } else if (p.Team === "B") {
        if (p.Pos[0] - 1 === coords[0] && [p.Pos[1] - 1, p.Pos[1] + 1].includes(coords[1])) return take(pos, coords);
        if (p.Beg === 1 && [coords[0] + 1, coords[0] + 2].includes(pos[0]) && pos[1] === coords[1]) return wayP(pos, coords, "B");
        else if (pos[0] === coords[0] + 1 && pos[1] === coords[1]) return wayP(pos, coords, "B");
    }
    return false;
}

function legalK(pos, coords, p) {
    if (Math.abs(pos[0] - coords[0]) <= 1 && Math.abs(pos[1] - coords[1]) <= 1) {
        return wayK(pos, coords);
    }

    if (p.Beg === 1 && pos[0] === coords[0] && Math.abs(pos[1] - coords[1]) === 2) {
        let team = p.Team;
        let row_idx = pos[0] - 1;

        if (coords[1] === pos[1] + 2) {
            let rook = pieces.find(r => r.Type === "R" && r.Team === team && r.Pos[0] === pos[0] && r.Pos[1] === 8 && r.Beg === 1);
            if (rook) {
                let path_clear = true;
                for (let c = pos[1]; c < rook.Pos[1] - 1; c++) {
                    if (board[row_idx][c] !== '0') {
                        path_clear = false; break;
                    }
                }
                if (path_clear) {
                    rook.Pos = [pos[0], pos[1] + 1];
                    return true;
                }
            }
        } else if (coords[1] === pos[1] - 2) {
            let rook = pieces.find(r => r.Type === "R" && r.Team === team && r.Pos[0] === pos[0] && r.Pos[1] === 1 && r.Beg === 1);
            if (rook) {
                let path_clear = true;
                for (let c = rook.Pos[1]; c < pos[1] - 1; c++) {
                    if (board[row_idx][c] !== '0') {
                        path_clear = false; break;
                    }
                }
                if (path_clear) {
                    rook.Pos = [pos[0], pos[1] - 1];
                    return true;
                }
            }
        }
    }
    return false;
}

function cast(p) {
    if (turn === p.Team) {
        let team = p.Team;
        if (p.Type === "R" && p.Beg === 1 && kings[team].Beg === 1) {
            kings[team].Beg = 0;
            let dif = Math.abs(kings[team].Pos[1] - p.Pos[1]);
            if (dif === 3) {
                if (wayR(p.Pos, [p.Pos[0], p.Pos[1] + (dif - 1)], "E")) {
                    p.Pos = [p.Pos[0], p.Pos[1] + (dif - 1)];
                    kings[team].Pos = [kings[team].Pos[0], kings[team].Pos[1] - (dif - 1)];
                    update();
                    turn = (turn === "W") ? "B" : "W";
                }
            } else if (dif === 4) {
                if (wayR(p.Pos, [p.Pos[0], p.Pos[1] - (dif - 1)], "W")) {
                    p.Pos = [p.Pos[0], p.Pos[1] - (dif - 1)];
                    kings[team].Pos = [kings[team].Pos[0], kings[team].Pos[1] + (dif - 2)];
                    update();
                    turn = (turn === "W") ? "B" : "W";
                }
            }
        }
    }
}

function wayK(pos, coords) {
    if (board[coords[0] - 1][coords[1] - 1] !== '0') return take(pos, coords);
    return true;
}


function wayR(pos, coords, way) {
    let dif = ["N", "S"].includes(way) ? Math.abs(pos[0] - coords[0]) : Math.abs(pos[1] - coords[1]);
    for (let i = 0; i < dif; i++) {
        if (way === "N" && board[pos[0] - (i + 1) - 1][pos[1] - 1] !== '0') return i === dif - 1 ? take(pos, coords) : false;
        else if (way === "S" && board[pos[0] + (i + 1) - 1][pos[1] - 1] !== '0') return i === dif - 1 ? take(pos, coords) : false;
        else if (way === "E" && board[pos[0] - 1][pos[1] + (i + 1) - 1] !== '0') return i === dif - 1 ? take(pos, coords) : false;
        else if (way === "W" && board[pos[0] - 1][pos[1] - (i + 1) - 1] !== '0') return i === dif - 1 ? take(pos, coords) : false;
    }
}

function wayB(pos, coords, way) {
    let dif = Math.abs(pos[0] - coords[0]);
    for (let i = 0; i < dif; i++) {
        if (way === "NW" && board[pos[0] - (i + 1) - 1][pos[1] - (i + 1) - 1] !== '0') return i === dif - 1 ? take(pos, coords) : false;
        else if (way === "NE" && board[pos[0] - (i + 1) - 1][pos[1] + (i + 1) - 1] !== '0') return i === dif - 1 ? take(pos, coords) : false;
        else if (way === "SW" && board[pos[0] + (i + 1) - 1][pos[1] - (i + 1) - 1] !== '0') return i === dif - 1 ? take(pos, coords) : false;
        else if (way === "SE" && board[pos[0] + (i + 1) - 1][pos[1] + (i + 1) - 1] !== '0') return i === dif - 1 ? take(pos, coords) : false;
    }
    return true;
}


function wayP(pos, coords, team) {
    let dif = Math.abs(pos[0] - coords[0]);
    for (let i = 0; i < dif; i++) {
        if (team === "W" && board[pos[0] + (i + 1) - 1][pos[1] - 1] !== '0') return false;
        else if (team === "B" && board[pos[0] - (i + 1) - 1][pos[1] - 1] !== '0') return false;
    }
    return true;
}


function move(p, coords) {
    active_piece = p;
    if (turn === p.Team) {
        let legal = false;
        if (p.Type === "R" && legalR(p.Pos, coords, p)) legal = true;
        else if (p.Type === "N" && legalN(p.Pos, coords)) legal = true;
        else if (p.Type === "B" && legalB(p.Pos, coords)) legal = true;
        else if (p.Type === "Q" && legalQ(p.Pos, coords, p)) legal = true;
        else if (p.Type === "P" && legalP(p.Pos, coords, p)) legal = true;
        else if (p.Type === "K" && legalK(p.Pos, coords, p)) legal = true;

        if (legal) {
            p.Pos = coords;
            update();
            if ("Beg" in p) p.Beg = 0;
            turn = (turn === "W") ? "B" : "W";
        }
        return legal;
    }
    return false;
}
