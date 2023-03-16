function solution(left, right) {
    let arr = [];
    for(let i = left; i <= right; i++) arr.push(i);
    
    for(let j = 0; j < arr.length; j++) {
        let sum = 1;
        for(let k = 1; k <= arr[j] / 2; k++) if(arr[j] % k === 0) sum++;
        if(sum % 2) arr[j] = arr[j] * -1;
    }

    return arr.reduce((acc, cur) => acc += cur);
}