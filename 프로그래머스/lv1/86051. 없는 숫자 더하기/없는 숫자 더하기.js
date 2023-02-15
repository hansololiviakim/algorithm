function solution(numbers) {
    let total = 0;
    let num = 0;
    
    for(let i = 0; i <= 9; i++) total += i;
    for(let i of numbers) num += i;
    
    return total - num;
}