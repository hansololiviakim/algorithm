const solution = (arr) => {
    let count = 0;
    while (true) {
        let newArr = arr.map(v => {
            if (v >= 50 && v % 2 === 0) return v / 2;
            else if (v < 50 && v % 2) return (v*2) + 1;
            else return v;
        });
        if (arr.every((e, idx) => e === newArr[idx])) break;
        arr = newArr;
        count++;
    }
    return count;
}