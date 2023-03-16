function solution(n) {
    let i = 1;
    let mul = 1;
    while(i <= n) {
        i++;
        mul *= i;
        if(mul > n) return i-1;
        if(mul === n) return i;
    }
}