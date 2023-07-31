const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

let answer = '';

for (let i = 1; i <= +input; i++) {
  answer += ' '.repeat(+input - i);
  answer += '*'.repeat(+i) + '\n';
}

console.log(answer);