const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
console.log((+input * (+input + 1)) / 2);