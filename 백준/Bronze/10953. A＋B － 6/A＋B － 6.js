const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [_, ...arr] = input
const answer = arr.reduce((acc, cur) => {
    const [A, B] = cur.split(',');
    return acc += (+A + +B) + '\n'
}, '');
console.log(answer);
