const solution = (s) => {
    const map = new Map();
    let arr = [];
    
    for (let i of s) {
        map.set(i, (map.get(i) || 0) + 1);
    }
    
    for (let [key, count] of map) {
        if (count === 1) arr.push(key);
    }
    
    return arr.sort().join('');
}