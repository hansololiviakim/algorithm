function solution(n) {
    const str = String(n);
    const arr = [];
    for(let i = str.length - 1; i >= 0; i--) arr.push(Number(str[i]));
    return arr;
}