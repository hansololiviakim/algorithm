function solution(picture, k) {
    let result = [];
    for (let [...i] of picture) {
        const repeat = i.map(v => v.repeat(k)).join('');
        for (let i = 1; i <= k; i++) result.push(repeat);
    }
    return result;
}