const solution = (p, c) => {
    const map = new Map();
    
    for (let i = 0; i < p.length; i++) {
        map.set(p[i], (map.get(p[i]) || 0) + 1);
        map.set(c[i], (map.get(c[i]) || 0) - 1);
    }
        
    for (const [name, value] of map) {
        if (value > 0) return name;
    }
}