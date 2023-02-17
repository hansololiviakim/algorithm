function solution(num_list) {
    let even = 0;
    let oddNumber = 0;
    let arr = [];
    for(let i of num_list) i % 2 ? oddNumber += 1 : even += 1;
    arr.push(even);
    arr.push(oddNumber);
    return arr;
}