function solution(n) {
    let arr = n.toString(3).split('').reverse().join('');
    return parseInt(arr, 3);
}