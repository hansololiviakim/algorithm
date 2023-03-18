function solution(before, after) {
    const bef = before.split('').sort();
    const aft = after.split('').sort();
    const arr = bef.filter((e, idx) => { if(bef[idx] === aft[idx]) return e; });
    return bef.length === arr.length ? 1 : 0;
}