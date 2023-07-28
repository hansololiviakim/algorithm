const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const arr = Array.from(Array(+input), (_, i) => i + 1);
console.log(arr.reduce((acc, cur) => (acc += cur), 0));
