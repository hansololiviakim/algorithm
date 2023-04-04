function solution(absolutes, signs) {
    let answer = 0;
    absolutes.map((e, idx) => {
        !signs[idx] ? e = -e : e;
        answer += e;
    })
    return answer;
}