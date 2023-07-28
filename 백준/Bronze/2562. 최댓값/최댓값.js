const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);
const max = Math.max(...input);

console.log(max);
console.log(input.indexOf(max) + 1);