function solution(num_list) {
    const arr = [0, 0]
    for(let i of num_list) i % 2 ? arr[1]++ : arr[0]++;
    return arr;
}