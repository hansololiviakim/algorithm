function solution(arr, k) {
    let answer = [...new Set(arr)];
    return answer.length > k ? answer.slice(0, k) : answer.concat(Array(k - answer.length).fill(-1));
}