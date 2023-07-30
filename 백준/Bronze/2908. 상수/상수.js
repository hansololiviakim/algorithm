const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const num = input.map((e) => e.split('').reverse().join(''));
console.log(Math.max(...num));
