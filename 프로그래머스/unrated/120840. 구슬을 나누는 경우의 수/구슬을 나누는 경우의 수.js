const solution = (balls, share) => {
    const factorial = (num) => {
        if (num === 0 || num === 1) return 1;
        return num * factorial(num - 1);
    }
    
    const n = factorial(balls);
    const m = factorial(share);
    const minus = factorial(balls - share);
    
    return Math.round(n / (minus * m));
}