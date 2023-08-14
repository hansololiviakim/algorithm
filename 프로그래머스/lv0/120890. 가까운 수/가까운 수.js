const solution = (array, n) => {
    const abs = array.sort().map(e => Math.abs(e - n));
    const idx = abs.indexOf(Math.min(...abs));
    return array[idx];
}