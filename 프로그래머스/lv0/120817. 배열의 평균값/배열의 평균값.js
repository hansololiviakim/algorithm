function solution(numbers) {
    let sum = 0;
    for(let i of numbers) sum += i;
    return sum / numbers.length;
}