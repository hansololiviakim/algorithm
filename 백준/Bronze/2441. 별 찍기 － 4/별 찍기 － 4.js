const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let star = '';
for (let i = input; i >= 1; i--) star += `${' '.repeat(input - i)}${'*'.repeat(i)}\n`;
console.log(star);