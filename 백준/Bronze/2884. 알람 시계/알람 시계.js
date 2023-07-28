const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const hour = +input[0];
const minute = +input[1];

if (minute >= 45) {
  console.log(hour, minute - 45);
} else {
  console.log(hour === 0 ? 23 : hour - 1, minute + 60 - 45);
}