function solution(sizes) {
    const arr = sizes.map(([width, height]) => width < height ? [height, width] : [width, height]);
    let answer = [0, 0];
    for(let length of arr) {
        if(length[0] > answer[0]) answer[0] = length[0];
        if(length[1] > answer[1]) answer[1] = length[1];
    }
    return answer[0] * answer[1];
}