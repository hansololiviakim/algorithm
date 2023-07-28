const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const a = +input[0];
const b = +input[1];
const c = +input[2];
let answer = '';

answer += ((a + b) % c) + '\n';
answer += (((a % c) + (b % c)) % c) + '\n';
answer += ((a * b) % c) + '\n';
answer += ((a % c) * (b % c)) % c;

console.log(answer);
