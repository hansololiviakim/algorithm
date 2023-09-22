const solution = (quiz) => {
    let answer = [];
    quiz.forEach(v => {
        const [x, sign, y, eqaul, z] = v.split(' ');
        let sum = 0;
        if (sign === '+') sum = +x + +y;
        else sum = +x - +y;
        sum === +z ? answer.push('O') : answer.push('X');
    })
    return answer;
}