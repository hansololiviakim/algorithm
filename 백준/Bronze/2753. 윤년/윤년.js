const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const answer = input % 4 === 0 && (input % 100 !== 0 || input % 400 === 0);
console.log(answer ? 1 : 0);
