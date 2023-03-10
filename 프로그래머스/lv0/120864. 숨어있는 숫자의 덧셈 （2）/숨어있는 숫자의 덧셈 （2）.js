function solution(my_string) {
    let arr = my_string.split(/[a-zA-Z]/g);
    let answer = 0;
    for(let i of arr) answer += Number(i);
    return answer;
}