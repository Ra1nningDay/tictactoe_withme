const tictac = () => {
    const board: string[][] = [[], [], []];
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

    const play = (row: number, col: number, symbol: string) => {
        if (board[row][col] === " ") {
            board[row][col] = symbol;
            printBoard();
        }
    };

    printBoard();
};

tictac();
