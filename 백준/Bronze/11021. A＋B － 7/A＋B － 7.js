const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const num = +input[0];

for (let i = 1; i <= num; i++) {
  const arr = input[i].trim().split(' ');
  console.log(`Case #${i}: ${+arr[0] + +arr[1]}`);
}