const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let answer = '';
for (let i = 1; i <= input; i++) answer += i + '\n';
console.log(answer);
