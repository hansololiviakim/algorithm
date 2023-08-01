const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const answer = input[1].trim().split(' ').filter((v) => +v === +input[2]).length;
console.log(answer);
