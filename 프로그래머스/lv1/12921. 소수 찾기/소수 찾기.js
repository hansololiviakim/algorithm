// function solution(n) {
//     const num = Array(n + 1).fill(true);
//     console.log(num)
//     let arr = [];
//     for(let i = 2; i < n; i++) {
//         if(num[i]) {
//             arr.push(i);
//             for(let j = 2; j < n; j++) {
//                 num[i * j] = false;
//             }
//         }
//     }
//     console.log(num)
//     console.log(arr)
// }

function solution(n) {
    let result = 0
    for (let i = 2; i <= n; i++) if (isPrime(i)) result++;
    return result;
}

function isPrime(num) {
    if (num % 2 === 0) return num === 2 ? true : false;
    const s = parseInt(Math.sqrt(num));
    for (i = 3; i <= s; i += 2) if (num % i === 0) return false;
    return true;
}