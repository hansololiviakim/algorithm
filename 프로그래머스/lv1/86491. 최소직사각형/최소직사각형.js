const solution = (sizes) => {
    let answer = [0, 0];
    sizes.map(([w, h]) => {
        if (Math.max(w, h) > answer[0]) answer[0] = Math.max(w, h);
        if (Math.min(w, h) > answer[1]) answer[1] = Math.min(w, h);
    })
    return answer[0] * answer[1];
}