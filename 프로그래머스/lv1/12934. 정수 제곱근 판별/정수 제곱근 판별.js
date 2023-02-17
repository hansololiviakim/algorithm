function solution(n) {
    let answer = 0;
    for(let i = 0; i <= n; i++) {
        if(n / i === i) {
            answer = (i + 1) ** 2;
            break;
        } else {
            answer = -1;
        }
    }
    return answer;
}