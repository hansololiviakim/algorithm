function solution(my_string) {
    const arr = my_string.match(/\d/g);
    let answer = 0;
    for(let i of arr) answer += Number(i);
    return answer;
}