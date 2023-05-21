function solution(start, end) {
    return Array.from(Array(start - end + 1), (v, i) => i + end).reverse();
}