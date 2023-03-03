function solution(age) {
    let arr = String(age).split('');
    return arr.map((i) => 'abcdefghij'[i]).join('')
}