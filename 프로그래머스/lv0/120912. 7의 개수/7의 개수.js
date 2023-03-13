function solution(array) {
    return array.join('').split('').filter(e => e === '7').length;
}