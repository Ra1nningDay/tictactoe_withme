"use strict";
const tictac = () => {
    const board = [[], [], []];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            board[i].push(" ");
        }
    }
    const printBoard = () => {
        console.log("Board TicTacToe:");
        board.map((row) => {
            console.log(row.join(" | "));
        });
    };
    const play = (row, col, symbol) => {
        if (board[row][col] === " ") {
            board[row][col] = symbol;
            printBoard();
        }
    };
    printBoard();
};
tictac();
