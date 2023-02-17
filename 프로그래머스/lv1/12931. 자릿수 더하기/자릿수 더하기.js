function solution(n){
    let str = String(n);
    let answer = 0;
    for(let i = 0; i < str.length; i++) answer += str[i] * 1
    return answer
}