function solution(nums) {
    const length = nums.length;
    let count = 0;
    for(let i = 0; i < length - 2; i++) {
        for(let j = i + 1; j < length - 1; j++) {
            for(let k = j + 1; k < length; k++) {
                if(isPrime(nums[i] + nums[j] + nums[k])) count++;
            }
        }
    }
    return count;    
}

function isPrime(n) {
    for(let i = 2; i <= Math.sqrt(n); i++) if(n % i === 0) return false;
    return true;
}