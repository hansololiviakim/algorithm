function solution(box, n) {
    let arr = box.map((v) => Math.floor(v / n));
    return arr[0] * arr[1] * arr[2];
}