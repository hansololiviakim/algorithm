function solution(s) {      
    let answer = '';
    for(let i = 0; i < s.length; i++) {
        if(i === 0 || s[i - 1] === ' ') {
            answer += s[i].replace(s[i][0], s[i][0].toUpperCase());
        } else {
            answer += s[i].toLowerCase();
        }
    }
    return answer;
}