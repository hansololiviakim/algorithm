function solution(x, n) {
    let answer = [];
    if(x < 0) {
        for(let i = Math.abs(x); i <= Math.abs(x) * n; i+=Math.abs(x)) {
            answer.push(i * -1);
        }
    } else if(x > 0) {
        for(let i = x; i <= x * n; i+=x) answer.push(i);
    } else{
        for(let i = 1; i <= n; i++) answer.push(0);
    }
    return answer;
}