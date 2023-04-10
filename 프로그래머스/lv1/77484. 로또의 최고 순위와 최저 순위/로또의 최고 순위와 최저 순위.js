function solution(lottos, win_nums) {
    // 일치하는 개수 : 순위
    const rank = { 0: 6, 1: 6, 2: 5, 3: 4, 4: 3, 5: 2, 6: 1, };
    // 최고 정답 개수, 최저 정답 개수
    let answer = [0, 0];
    lottos.forEach((num, idx) => {
        if(num === 0) {
            answer[0]++;
        } else if(win_nums.includes(num)) {
            answer[0]++;
            answer[1]++;
        }
    });
    return [rank[answer[0]], rank[answer[1]]];
}