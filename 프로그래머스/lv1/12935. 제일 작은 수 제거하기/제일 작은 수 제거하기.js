function solution(arr) {
    const index = arr.indexOf(Math.min.apply(Math, arr));  
    arr.splice(index , 1);
    if(arr.length === 0) arr.push(-1);
    return arr;
}