function solution(order) {
    let arr = String(order).split('');
    let answer = 0;
    for(let i of arr) if(i == 3 || i == 6 || i == 9) answer += 1;
    return answer;
}