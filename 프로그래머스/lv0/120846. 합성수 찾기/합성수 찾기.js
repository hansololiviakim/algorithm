function solution(n) {
    let arr = [];
    for(let i = 1; i <= n; i++) arr.push(i);
    
    let sum = 0;
    for(let i of arr) if(isNotPrime(i) === true) sum++;
    
    return sum;
}

function isNotPrime(num) {
    let divisor = [];
    for(let i = 1; i <= num; i++) if(num % i === 0) { divisor.push(i) }
    return divisor.length >= 3 ? true : false;
}