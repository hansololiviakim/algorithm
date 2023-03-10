function solution(my_str, n) {
    let arr = my_str.split('');
    let answer = [];
    for(let i = 0; i <= arr.length; i += n) {
        answer.push(arr.slice(i, i + n).join(''));
    }
    return answer.filter(e => e !== '');
}