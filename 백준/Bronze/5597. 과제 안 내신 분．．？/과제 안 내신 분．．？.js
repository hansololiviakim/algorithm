const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const students = input.sort((a, b) => a - b);
let answer = [];
for (let i = 1; i <= 30; i++) {
  if (!students.includes(i)) answer.push(i);
}
console.log(answer.join('\n'));
