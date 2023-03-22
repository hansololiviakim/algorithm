function solution(s) {
    const arr = s.split(' ');
    const sum = arr.reduce((acc, cur, idx) => {
        return cur === 'Z' ? acc - Number(arr[idx - 1]) : acc + Number(cur);
    }, 0)
    return sum;
}