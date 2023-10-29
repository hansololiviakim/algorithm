const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const arr = [...input.toUpperCase()];
const map = new Map();
arr.forEach((v) => map.set(v, map.get(v) + 1 || 1));
const maxVal = Math.max(...map.values());
const maxKeys = [...map.entries()].filter(([_, curVal]) => curVal === maxVal).map(([curKey]) => curKey);
console.log(maxKeys.length > 1 ? '?' : maxKeys[0]);
