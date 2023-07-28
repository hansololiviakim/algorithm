const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const a = +input[0];
const b = +input[1];
const answer = a > b ? '>' : a === b ? '==' : '<';

console.log(answer);
