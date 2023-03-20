function solution(i, j, k) {
    let arr = Array.from(Array(j - i + 1), (x, y) => i + y);
    const str = arr.join('');
    return str.length - str.replaceAll(k, '').length;
}