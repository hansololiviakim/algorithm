function solution(n) {
    for(let i = 1; i <= 100; i++) {
        if(n * i % 6 === 0) return n * i / 6;
    }
}