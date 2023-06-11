function solution(num_list) {
    const answer = num_list.filter(e => e < 0);
    return answer.length === 0 ? -1 : num_list.indexOf(answer[0]);
}