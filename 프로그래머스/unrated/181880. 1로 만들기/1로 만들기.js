const solution = (num_list) => {
    let count = 0;
    for (let i of num_list) {
        while (i !== 1) {
            i = i % 2 ? (i-1) / 2 : i / 2;
            count++;
        }
    }
    return count;
}