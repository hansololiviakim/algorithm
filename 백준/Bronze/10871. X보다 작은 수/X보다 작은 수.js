const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num = input[0].trim().split(' ')[1];
const answer = input[1].trim().split(' ').filter((e) => +e < num).join(' ');

console.log(answer);
