function solution(binomial) {
    const arr = binomial.split(' ');
    return arr[1] === '+' ? +arr[0] + +arr[2] : arr[1] === '-' ? arr[0] - arr[2] : arr[0] * arr[2];
}