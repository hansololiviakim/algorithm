const solution = (arr, flag) => {
    let answer = [];
    flag.map((e, idx) => {
        if (e) {
            for (let i = 1; i <= arr[idx] * 2; i++) {
                answer.push(arr[idx]);
            }
        } else {
            answer.splice(-arr[idx]);
        }
    })
    return answer;
}