function solution(numbers) {
    numbers.sort((a, b) => b - a);   
    let arr = [numbers[0], numbers[1], numbers[numbers.length - 2], numbers[numbers.length - 1]];
    return (arr[2] < 0 && arr[3] < 0) && (arr[0] * arr[1] < arr[2] * arr[3]) ?
        arr[2] * arr[3] : arr[0] * arr[1];
}