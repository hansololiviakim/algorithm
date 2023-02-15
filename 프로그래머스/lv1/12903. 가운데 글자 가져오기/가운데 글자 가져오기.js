function solution(s) {
    let answer = s.length % 2 === 1 ? s.at(s.length / 2) : s.at((s.length / 2)-1) + s.at(s.length / 2);
    return answer;
}