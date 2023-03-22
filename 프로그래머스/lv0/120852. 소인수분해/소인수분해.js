function solution(n) {
    let arr = Array.from(Array(n), (v, i) => i + 2);
    for(let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
        arr = arr.filter(e => e % i !== 0 || e <= i);
    };
    
    let answer = [];
    for(let j of arr) if(n % j === 0) answer.push(j);
    
    return answer;
}