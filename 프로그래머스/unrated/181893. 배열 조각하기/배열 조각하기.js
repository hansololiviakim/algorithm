const solution = (arr, query) => {
    query.map((v, i) => i % 2 ? arr.splice(0, v) : arr.splice(v + 1));
    return arr;
}