const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const str = [...new Set(input)];
const arr = [];
const answer = Array(26).fill(-1);

for (let i = 97; i <= 122; i++) {
  arr.push(String.fromCharCode(i));
}

str.forEach((v) => {
  if (arr.includes(v)) {
    answer[arr.indexOf(v)] = input.indexOf(v);
  }
});

console.log(answer.join(' '));
