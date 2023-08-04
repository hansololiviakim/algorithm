const solution = (food) => {
    let answer = '';
    food.map((e, idx) => answer += String(idx).repeat(Math.floor(e / 2)));
    answer += '0' + [...answer].reverse().join('');
    return answer;
}