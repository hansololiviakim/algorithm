function solution(n) {
    return !Number.isInteger(Math.sqrt(n)) ? -1 : (Math.sqrt(n) + 1) ** 2;
}