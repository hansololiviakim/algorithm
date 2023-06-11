function solution(numbers, n) {
    const answer = numbers.reduce((acc, cur) => {
        if (acc > n) return acc;
        return acc + cur;
    }, 0);
    return answer;
}