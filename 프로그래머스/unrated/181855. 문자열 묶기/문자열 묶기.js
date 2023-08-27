function solution(strArr) {
    const map = new Map();
    let max = 0;
    
    for (let i of strArr) {
        map.set(i.length, (map.get(i.length) || 0) + 1);
    }
    
    for (let count of map.values()) {
        if (count > max) max = count;
    }
    
    return max;
}