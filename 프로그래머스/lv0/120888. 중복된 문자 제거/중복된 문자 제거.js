function solution(my_string) {
    const arr = my_string.split('');
    const set = new Set(arr);
    return [...set].join('');
}