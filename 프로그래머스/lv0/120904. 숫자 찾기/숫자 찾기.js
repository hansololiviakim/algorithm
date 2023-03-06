function solution(num, k) {
    let arr = String(num).split('');
    return String(num).split('').includes(String(k)) ? arr.indexOf(String(k)) + 1 : -1;
}