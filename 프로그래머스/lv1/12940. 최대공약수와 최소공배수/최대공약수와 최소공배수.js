const solution = (n, m) => {
    let answer = [];
    
    // 최대공약수
    for (let i = Math.min(n, m); i >= 1; i--) {
        if (n % i === 0 && m % i === 0) {
            answer.push(i);
            break;
        }
    }
    
    // 최소공배수
    answer.push(n / answer[0] * m / answer[0] * answer[0]);
    
    return answer;
}