function solution(left, right) {
    let arr = Array.from(Array(right - left + 1), (_, i) => i + left);
    let answer = 0;
    arr.map((e, idx) => Number.isInteger(Math.sqrt(e)) ? answer -= e : answer += e);
    return answer;
}