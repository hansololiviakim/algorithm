const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [up, down, height] = input;
console.log(Math.ceil((height - up) / (up - down)) + 1);