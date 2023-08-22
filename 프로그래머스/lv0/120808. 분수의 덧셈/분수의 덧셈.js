const solution = (numer1, denom1, numer2, denom2) =>{
    const sum = [(numer1 * denom2) + (numer2 * denom1), (denom1 * denom2)];
   
    for (let i = Math.min(...sum); i >= 1; i--) {
        if(sum[0] % i === 0 && sum[1] % i === 0) {
            return [sum[0] / i, sum[1] / i];
        }
    }
}