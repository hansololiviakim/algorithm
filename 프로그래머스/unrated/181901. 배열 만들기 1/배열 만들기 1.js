const solution = (n, k) => {
    const answer = [];
    for(let i = k; i <= n; i++) if(i % k === 0) answer.push(i);
    return answer;
}