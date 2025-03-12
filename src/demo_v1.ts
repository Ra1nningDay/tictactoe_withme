import * as readline from "readline-sync";

const tictacDemov1 = () => {
    // กำหนดพื้นที่ด้วย Array 3x3
    let arr: string[][] = Array(3)
        .fill(null)
        .map(() => Array(3).fill(" "));

    // แสดงพื้นที่เกมของเกม และค่าที่อยู่ในสนาม
    const printBoard = () => {
        console.log("\nTic Tac Toe :");
        arr.map((row) => {
            console.log(row.join(" | "));
        });
    };

    const play = (row: number, col: number, symbol: string) => {
        if (arr[row][col] === " ") {
            arr[row][col] = symbol;
            printBoard();
        } else {
            console.log(`คุณใส่ในพื้นที่ซ้ำ`);
        }
    };

    const move = () => {
        const rowInput = readline.question("ใส่แถว (0-2):");
        const colInput = readline.question("ใส่คอลัมน์ (0-2)");
        const symbol = readline.question("ใส่สัญลักษณ์ (O หรือ X)");

        const row = parseInt(rowInput);
        const col = parseInt(colInput);

        play(row, col, symbol);

        move();
    };

    const resetBoard = () => {
        arr = Array(3)
            .fill(null)
            .map(() => Array(3).fill(" "));
        return true;
    };

    // resetBoard();
    printBoard();
    move();
};

tictacDemov1();
