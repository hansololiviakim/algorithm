function solution(hp) {
    const power = [5, 3, 1];
    let targetHp = hp;
    let answer = 0;
    
    for(let i of power) {
        if(targetHp >= i) {
            answer += Math.floor(targetHp / i);
            targetHp = targetHp - (i * Math.floor(targetHp / i));
        }
    }
    
    return answer;
}