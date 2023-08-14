const solution = (array, n) => {
    const abs = [...array].map(e => Math.abs(e - n));
    const idx = abs.map((e, idx) => e === Math.min(...abs) ? array[idx] : 0).filter(e => e !== 0);
    return Math.min(...idx);
}