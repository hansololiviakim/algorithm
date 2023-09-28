const solution = (arr) => {
    const num = Math.ceil(Math.log2(arr.length));
    if (arr.length < 2 ** num) {
        for (let i = arr.length; i < 2 ** num; i++) {
            arr.push(0);
        }
    }
    return arr;
}