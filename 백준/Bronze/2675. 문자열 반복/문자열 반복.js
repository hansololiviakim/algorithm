const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 1; i <= +input[0]; i++) {
  const num = input[i].split(' ')[0];
  const str = input[i].split(' ')[1].trim().split('');
  const answer = str.map((e) => e.repeat(num));
  console.log(answer.join(''));
}
