const tictac = () => {
    const board = [[], [], []];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            board[i].push("*");
        }
    }

    board.map((row) => {
        console.log(row);
    });
};

tictac();
