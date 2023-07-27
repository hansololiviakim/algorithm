const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const one = input[0];
const two = input[1];

console.log(one * two[2]);
console.log(one * two[1]);
console.log(one * two[0]);
console.log(one * two);