const solution = (a, d, included) => {
    let answer = 0;
    included.map((e, idx) => e ? answer += a + (idx * d) : 0 );
    return answer;
}