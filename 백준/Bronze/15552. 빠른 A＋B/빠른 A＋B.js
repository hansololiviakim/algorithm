const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let answer = '';

for (let i = 1; i <= input[0]; i++) {
  const arr = input[i].split(' ');
  answer += +arr[0] + +arr[1] + '\n';
}

console.log(answer);
