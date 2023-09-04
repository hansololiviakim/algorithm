const solution = (n) => {
    let answer = [n];
    while (n !== 1) {
        n = n % 2 ? 3 * n + 1 : n / 2;
        answer.push(n);
    }
    return answer;
}