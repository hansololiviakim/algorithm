const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const hr = Number(input[0].split(' ')[0]);
const min = Number(input[0].split(' ')[1]);
const cookTime = +input[1] + min;

let cookHr = hr + Math.floor(cookTime / 60);
let cookMin = cookTime % 60;

console.log(cookHr >= 24 ? (cookHr %= 24) : cookHr, cookMin);
