function solution(arr, k) {
    return k % 2 ? arr.map(e => e * k) : arr.map(e => e + k);
}