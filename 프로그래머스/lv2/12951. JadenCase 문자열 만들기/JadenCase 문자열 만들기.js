const solution = (s) => {
    let answer = '';
    for (let i = 0; i < s.length; i++) {
        i === 0 || s[i - 1] === ' ' ? answer += s[i].toUpperCase() : answer += s[i].toLowerCase();
    }
    return answer;
}