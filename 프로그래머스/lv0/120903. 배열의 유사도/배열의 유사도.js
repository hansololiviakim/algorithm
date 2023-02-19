function solution(s1, s2) {
    let answer = 0;
    for(let i of s1) {
        for(let j = 0; j < s2.length; j++) {
            if(i === s2[j]) answer++;
        }
    }
    return answer;
}