function solution(slice, n) {
    for(let i = 1; i <= n; i++) {
        if(slice * i >= n) {
            return i;
        }
    }
}