function solution(array, n) {
    const arr = array.sort((a, b) => a - b).map(e => Math.abs(e - n));
    const idx = arr.indexOf(Math.min(...arr));
    return array.sort((a, b) => a - b)[idx]
}