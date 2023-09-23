const solution = (n) => {
    const len = n.toString(2).replaceAll(/[0]/g, '').length;
    for (let i = n+1; i <= 1000000; i++) {
        if (i.toString(2).replaceAll(/[0]/g, '').length === len) {
            return i;
        }
    }
}