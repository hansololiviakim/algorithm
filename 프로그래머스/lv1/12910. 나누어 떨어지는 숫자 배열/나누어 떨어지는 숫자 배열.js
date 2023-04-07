function solution(arr, divisor) {
    const answer = arr.filter(e => e % divisor == 0);
    answer.length !== 0 ? answer.sort((a, b) => a - b) : answer.push(-1);
    return answer;
}