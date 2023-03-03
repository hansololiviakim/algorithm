function solution(my_string) {
    let arr = my_string.match(/[0-9]/g);
    arr = arr.map((i) => Number(i));
    return arr.sort((a, b) => a - b);
}