const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    return Number(input[0]) % 2 ? console.log(`${input[0]} is odd`) : console.log(`${input[0]} is even`);
});