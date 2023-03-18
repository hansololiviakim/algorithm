function solution(s) {
    let arr = [Math.min(...s.split(' ')), Math.max(...s.split(' '))];
    return arr.join(' ');
}