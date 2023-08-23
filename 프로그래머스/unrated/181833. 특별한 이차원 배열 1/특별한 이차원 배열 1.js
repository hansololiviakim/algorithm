function solution(n) {
    let arr = Array(n).fill().map(() => Array(n).fill(0));
    for (let i = 0; i < arr.length; i++) {
        arr[i][i] = 1;
    }
    return arr;
}