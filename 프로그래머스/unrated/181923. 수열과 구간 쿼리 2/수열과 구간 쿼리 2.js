const solution = (arr, queries) => {
    let answer = [];
    for (let [s, e, k] of queries) {
        const find = arr.slice(s, e+1).filter(v => v > k);
        !find.length ? answer.push(-1) : answer.push(Math.min(...find))
    }
    return answer;
}