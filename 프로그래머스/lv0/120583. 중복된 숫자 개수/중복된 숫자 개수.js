function solution(array, n) {
    const answer = array.filter((e) => e === n);
    return answer.length;
}