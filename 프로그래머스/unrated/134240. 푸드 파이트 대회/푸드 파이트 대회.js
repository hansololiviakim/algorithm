const solution = (food) => {
    let answer = '';
    food.map((e, idx) => {
        const num = Math.floor(e / 2);
        num !== 0 ? answer += String(idx).repeat(num) : '';
    });
    answer += `0${answer.split('').reverse().join('')}`;
    return answer;
}