function solution(arr) {
    return arr.filter((e, idx) => arr[idx] !== arr[idx + 1]);
}