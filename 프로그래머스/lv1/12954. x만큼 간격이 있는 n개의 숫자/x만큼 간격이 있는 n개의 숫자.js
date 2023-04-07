function solution(x, n) {
    let arr = new Array(n).fill(x);
    return arr.map((e, idx) => e * (idx + 1));
}