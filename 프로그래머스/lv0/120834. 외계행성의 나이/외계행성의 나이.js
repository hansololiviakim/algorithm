function solution(age) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let arr = String(age).split('');
    let answer = '';
    for(let i of arr) answer += alphabet[i];
    return answer;
}