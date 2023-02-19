function solution(my_string, n) {
    let str = my_string.split('');
    let answer = '';
    for(let i of str) answer += i.repeat(n);
    return answer;
}