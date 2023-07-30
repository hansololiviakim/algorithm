const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const price = +input[0];
let total = 0;

for (let i = 2; i < input.length; i++) {
  const arr = input[i].trim().split(' ');
  total += +arr[0] * +arr[1];
}

console.log(price === total ? 'Yes' : 'No');
