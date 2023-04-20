function solution(a, b) {
    const strSum = `${a}` + `${b}`;
    const numSum = 2 * a * b;
    if(strSum === numSum) return a + b;
    else return Math.max(strSum, numSum);
}