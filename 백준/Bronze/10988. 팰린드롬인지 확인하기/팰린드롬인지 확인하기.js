const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const reversed = input.split('').reverse().join('');
console.log(input === reversed ? 1 : 0);