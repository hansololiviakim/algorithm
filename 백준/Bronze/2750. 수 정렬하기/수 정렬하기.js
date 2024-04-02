const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [count, ...numbers] = input;
numbers.sort((a, b) => a - b);
let answer = '';
for (let i = 0; i < count; i++) answer += numbers[i] + '\n';
console.log(answer);
