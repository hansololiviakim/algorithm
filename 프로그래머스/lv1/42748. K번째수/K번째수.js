const solution = (array, commands) => {
    let answer = [];
    commands.map(e => {
        const [i, j, k] = e;
        answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
    })
    return answer;
}