const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const num = +input[0];

for (let i = 1; i <= num; i++) {
  const len = input[i].trim().length - 1;
  console.log(`${input[i][0]}${input[i][len]}`);
}
