function solution(array) {
    const map = new Map();
    let maxNum = 0;
    let maxSum = [];
    
    for (let i of array) {
        map.set(i, (map.get(i) || 0) + 1);
    }
    
    for (const [key, sum] of map) {
        if (sum > maxNum) {
            maxNum = sum;
            maxSum = [key];
        } else if (sum === maxNum) {
            maxSum.push(key);
        }
    }
    
    return maxSum.length > 1 ? -1 : maxSum[0];
}