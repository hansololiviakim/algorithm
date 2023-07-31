const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const answer = 'long '.repeat(+input / 4);
console.log(`${answer}int`);
