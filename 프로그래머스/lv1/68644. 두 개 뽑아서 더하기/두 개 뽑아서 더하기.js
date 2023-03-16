function solution(numbers) {  
    let sumArr = [];
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length; j++) {
            if(i !== j) {
                sumArr.push(numbers[i] + numbers[j]);
            }
        }
    }
    const set = new Set(sumArr);
    const uniqueArr = [...set];
    return uniqueArr.sort((a, b) => a - b);
}