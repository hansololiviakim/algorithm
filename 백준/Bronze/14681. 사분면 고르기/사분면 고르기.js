const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const x = +input[0];
const y = +input[1];
let answer = 0;

if (x > 0 && y > 0) answer = 1;
else if (x < 0 && y > 0) answer = 2;
else if (x < 0 && y < 0) answer = 3;
else answer = 4;

console.log(answer);
