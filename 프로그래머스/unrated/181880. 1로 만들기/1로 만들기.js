const solution = (num_list) => {
    let count = 0;
    for (let i of num_list) {
        if (i === 1) continue;
        for (let j = i, k = i; k >= 1; j--) {
            if (k === 1) break;
            count++;
            k = k % 2 ? (k-1) / 2 : k / 2;
        }
    }
    return count;
}