const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const answer = new Set(input.map((e) => +e % 42)).size;
console.log(answer);