function solution(my_string) {
    let arr = my_string.split(' ');
    let answer = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '-') {
            arr[i + 1] = arr[i + 1] * -1;
        } else if(arr[i] === '+') {
            arr[i + 1] = arr[i + 1] * 1;
        } else {
            answer += Number(arr[i]);
        }
    }
    return answer;
}
