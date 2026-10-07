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