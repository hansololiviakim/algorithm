const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 1; i <= +input[0]; i++) {
  const arr = [...input[i].split(' ').map(Number)];
  const score = arr.slice(1);
  const total = arr.slice(0, 1);
  const avg = score.reduce((acc, cur) => acc + cur, 0) / total;
  const students = score.filter((e) => e > avg).length;
  const percentage = ((students / total) * 100).toFixed(3);
  console.log(`${percentage}%`);
}
