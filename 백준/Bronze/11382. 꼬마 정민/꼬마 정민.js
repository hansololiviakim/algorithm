const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const a = +input[0];
const b = +input[1];
const c = +input[2];
const answer = a + b + c;
console.log(answer);
