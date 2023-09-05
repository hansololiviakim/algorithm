function solution(rank, attendance) {
    const arr = rank.filter((v, i) => attendance[i]).sort((a, b) => a - b).slice(0, 3);
    const [ a, b, c ] = arr.map(v => rank.indexOf(v));
    return 10000 * a + 100 * b + c;
}