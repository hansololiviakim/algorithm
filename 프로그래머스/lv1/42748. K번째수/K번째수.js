const solution = (array, commands) => {
    let answer = [];
    for (let a = 0; a < commands.length; a++) {
        const [i, j, k] = commands[a];
        answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k -1]);
    }
    return answer;
}