"use strict";
const arr = [[], [], []];
for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 4; ++j) {
        arr[i].push(" ");
    }
}
arr.map((space) => {
    console.log(space.join("*"));
});
