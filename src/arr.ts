const arr: string[][] = [[], [], []];

for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 2; ++j) {
        arr[i].push(" ");
    }
}

arr.map((space) => {
    console.log(space.join("*"));
});
