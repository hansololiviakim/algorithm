const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    console.log(
        input[0].split('').map(e => e === e.toLowerCase() ? e.toUpperCase() : e.toLowerCase()).join('')
    );
});