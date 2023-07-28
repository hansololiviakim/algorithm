const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const a = +input[0];
const b = +input[1];
const c = +input[2];

if (a === b && b === c) {
  console.log(10000 + a * 1000);
} else if (a === b || a === c) {
  console.log(1000 + a * 100);
} else if (b === c) {
  console.log(1000 + b * 100);
} else {
  console.log(Math.max(...input) * 100);
}