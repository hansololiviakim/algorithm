const solution = (arr, queries) => {
    queries.map(e => {
        const test = Array.from(Array(e[1] - e[0] + 1), (_, i) => i + e[0]);
        test.map(v => arr[v] += 1);
    })
    return arr;
}