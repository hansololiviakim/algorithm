function solution(my_string) {
    let alphabet = my_string.toLowerCase().split('');
    return alphabet.sort().join('');
}