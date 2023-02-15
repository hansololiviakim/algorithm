function solution(strings, n) {
    let answer = strings.sort((a, b) => {
        if(a[n] > b[n]) return 1;
        if(a[n] === b[n]) return (a > b ? 1 : -1)
        if(a[n] < b[n]) return -1;
    })
    return answer;
}

