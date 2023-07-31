const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
  const arr = input[i].trim().split(' ');
  console.log(+arr[0] + +arr[1]);
}
