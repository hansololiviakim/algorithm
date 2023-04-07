function solution(s) {
    const center = Math.floor(s.length / 2);
    return s.length % 2 ? s.substr(center, 1) : s.substr(center - 1, 2)
}