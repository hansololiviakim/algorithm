const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const num = Number(input);

for(let i = 1; i < num; i++){
    const blank = ' '.repeat( (num - i) );
    const stars = '*'.repeat( i + (i - 1) );
    console.log(blank + stars);
}

for(let j = num; j > 0; j--) {
    const blank = ' '.repeat( (num - j) );
    const stars = '*'.repeat( j + (j - 1) );
    console.log(blank + stars);
}