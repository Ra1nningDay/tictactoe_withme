"use strict";
const tictac = () => {
    const arr = [[], [], []];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            arr[i].push(" ");
        }
    }

    const printBoard = () => {
        console.log("\nTic Tac Toe :");
        arr.map((row) => {
            console.log(row.join(" | "));
        });
    };

    const play = (row, col, symbol) => {
        if (arr[row][col] === " ") {
            arr[row][col] = symbol;
            printBoard();
        } else {
            console.log(`คุณใส่ในพื้นที่ซ้ำ`);
        }
    };

    play(1, 0, "x");
    play(1, 1, "o");
    play(0, 1, "x");
    play(0, 0, "o");
    play(2, 2, "x");
};

tictac();
