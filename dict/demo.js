"use strict";
const tictacDemo = () => {
    // กำหนดพื้นที่ด้วย Array 3x3
    let arr = Array(3)
        .fill(null)
        .map(() => Array(3).fill(" "));
    // for (let i = 0; i < 3; i++) {
    //     for (let j = 0; j < 3; j++) {
    //         board[i].push(" ");
    //     }
    // }
    // แสดงพื้นที่เกมของเกม และค่าที่อยู่ในสนาม
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
    play(2, 0, "o");
    play(0, 2, "x");
    play(1, 2, "0");
    const resetBoard = () => {
        arr = Array(3)
            .fill(null)
            .map(() => Array(3).fill(" "));
        return true;
    };
    // resetBoard();
    printBoard();
};
tictacDemo();
