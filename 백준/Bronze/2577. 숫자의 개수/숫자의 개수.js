const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const multiple = input[0] * input[1] * input[2];
const multipleArr = String(multiple).split('');
const answerArr = Array(10).fill(0);
for (let i = 0; i < multipleArr.length; i++) {
  const idx = Number(multipleArr[i]);
  answerArr[idx]++;
}

let answer = '';
for (let j = 0; j < answerArr.length; j++) {
  answer += String(answerArr[j]) + '\n';
}

console.log(answer);
