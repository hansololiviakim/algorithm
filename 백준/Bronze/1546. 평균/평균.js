const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const total = +input[0];
const beforeScore = input[1].split(' ').map(Number);
const max = Math.max(...beforeScore);
const afterScore = beforeScore.map((e) => (e / max) * 100);
const avg = afterScore.reduce((acc, cur) => acc + cur, 0) / total;

console.log(Number.isInteger(avg) ? +avg.toFixed(1) : avg);