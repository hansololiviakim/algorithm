function solution(arr, divisor) {
    let answer = [];
    for(let i of arr) i % divisor === 0 ? answer.push(i) : 0;
    if(answer.length === 0) answer.push(-1);
    answer.sort((a, b) => { return a - b;});
    return answer
}