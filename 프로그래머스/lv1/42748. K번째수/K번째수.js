function solution(array, commands) {
    return commands.map((i, idx) => {
        let arr = array.slice(i[0] - 1, i[1]);
        arr.sort((a, b) => a - b);
        return arr[i[2] - 1];
    });
}