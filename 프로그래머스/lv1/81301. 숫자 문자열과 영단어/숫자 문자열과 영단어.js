function solution(s) {
    const number = {
        'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4,
        'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9,
    };
    let arr = s.split('');
    let str = '';
    let answer = '';
    for(let i of arr) {
        str += i;
        if(Object.keys(number).includes(str)) {
            answer += number[str];
            str = '';
        };
        if(Number.isInteger(str * 1)) {
            answer += str;
            str = '';
        }
    }
    return Number(answer);
}