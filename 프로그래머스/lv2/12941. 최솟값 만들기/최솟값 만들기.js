const solution = (A,B) => {
    const sortA = A.sort((a, b) => a - b);
    const sortB = B.sort((a, b) => b - a);
    let answer = 0;
    for (let i = 0; i < sortA.length; i++) {
        answer += sortA[i] * sortB[i];
    }
    return answer;
}