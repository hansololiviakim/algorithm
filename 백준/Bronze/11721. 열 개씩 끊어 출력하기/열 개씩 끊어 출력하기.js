const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let answer = '';
for (idx = 0; idx < input.length; idx += 10) {
    answer += input.slice(idx, idx + 10) + '\n';
}
console.log(answer);