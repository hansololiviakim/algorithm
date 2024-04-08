const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [count, ...arr] = input;
let answer = '';
arr.sort((a, b) => a - b);
for (let i = 0; i < count; i++) {
  answer += arr[i] + '\n';
}
console.log(answer);
