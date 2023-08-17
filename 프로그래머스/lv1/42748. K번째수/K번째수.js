const solution = (array, commands) => {
    return commands.map(e => {
        const [i, j, k] = e;
        return array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
    })
}