const fs = require('fs');
const init = fs.readFileSync('/dev/stdin').toString().trim();

let cycle = 0;
let num = (cycle === 0 ? init : num).padStart(2, 0);
while (true) {
    let add = `${num.split('').reduce((acc, cur) => acc += +cur, 0)}`;
    num = num[num.length - 1] + add[add.length - 1];
    cycle++;
    if (+init === +num) {
        console.log(cycle);
        return;
    }
}