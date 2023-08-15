const solution = (progresses, speeds) => {
    const answer = [0];
    const days = progresses.map((e, idx) => Math.ceil((100 - e) / speeds[idx]));
    let maxDay = days[0];
    
    for (let i = 0, j = 0; i < days.length; i++) {
        if (maxDay >= days[i]) {
            answer[j]++;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }
    
    return answer;
}