function solution(n) {
    const str = String(n).split('');
    let answer = 0;
    for(let i of str) answer += Number(i);
    return answer;
}