function solution(a, b, c, d) {
    const obj = {};
    
    for (const i of [a, b, c, d]) {
        obj[i] = (obj[i] || 0) + 1;
    }
    
    const keys = Object.keys(obj).map(Number);
    const values = Object.values(obj);
    const len = keys.length;
    
    switch (keys.length) {
        case 1:
            return 1111 * keys[0];
        case 2:
            if (values.includes(3)) {
                const q = keys[values.findIndex(e => e === 1)];
                const p = keys[values.findIndex(e => e === 3)];
                return (10 * p + q) ** 2;
            } else {
                return (keys[0] + keys[1]) * Math.abs(keys[0] - keys[1]);
            }
        case 3:
            const arr = keys.filter((_, idx) => values[idx] === 1);
            return arr[0] * arr[1];
        case 4:
            return Math.min(...keys);
    }
}