function solution(sides) {
    let max = Math.max(...sides);
    sides.splice(sides.indexOf(max), 1);
    let answer = max < sides[0] + sides[1] ? 1 : 2;
    return answer;
}