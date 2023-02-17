function solution(numbers) {
    let sum = 0;    
    if(numbers.length % 2) {
        sum = ((numbers[1] + numbers[numbers.length - 1]) * (numbers.length - 1) / 2 + numbers[0]);
    } else {
        sum = (numbers[0] + numbers[numbers.length - 1]) * (numbers.length / 2);
    }
    return sum / numbers.length;
}