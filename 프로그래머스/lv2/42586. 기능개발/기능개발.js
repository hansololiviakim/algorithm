const solution = (progresses, speeds) => {
    const answer = [];
    const days = progresses.map((e, idx) => Math.ceil((100 - e) / speeds[idx]));
    let count = 1;
    let maxDay = days[0];
    
    for (let i = 1; i < days.length; i++) {
        if (days[i] <= maxDay) {
            count++;
        } else {
            maxDay = days[i];
            answer.push(count);
            count = 1;
        }
    }
    answer.push(count);
    
    return answer;
}