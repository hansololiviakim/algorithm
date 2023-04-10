function solution(answers) {
    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let answer = [];
    
    const one_answer = answers.filter((e, idx) => e === one[idx % one.length]).length;
    const two_answer = answers.filter((e, idx) => e === two[idx % two.length]).length;
    const three_answer = answers.filter((e, idx) => e === three[idx % three.length]).length;
    const max = Math.max(one_answer, two_answer, three_answer);
    
    if(one_answer === max) answer.push(1);
    if(two_answer === max) answer.push(2);
    if(three_answer === max) answer.push(3);

    return answer;
}