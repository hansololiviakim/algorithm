const solution = (l, r) => {
    let result = [];
    for (let i = Math.ceil(l / 5)* 5; i <= r; i += 5) {
        if (/^[50]*$/g.test(i)) result.push(i);
    }
    return result.length ? result : [-1];
}