function solution(my_string) {
    let arr = my_string.split(/a|e|i|o|u/);
    return arr.join('');
}