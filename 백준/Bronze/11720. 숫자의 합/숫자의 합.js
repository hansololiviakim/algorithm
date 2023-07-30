const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num = input[1].split('').map(Number);
const sum = num.reduce((acc, cur) => acc + cur, 0);

console.log(sum);
