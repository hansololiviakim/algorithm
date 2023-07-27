const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = +input[0];
const B = +input[1];

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B));
console.log(A % B);