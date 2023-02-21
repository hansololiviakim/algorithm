function solution(money) {
    let answer = [0, money];
    if(money >= 5500) {
        answer[0] = Math.floor(money / 5500);
        answer[1] = money - answer[0] * 5500;
    }
    return answer;
}