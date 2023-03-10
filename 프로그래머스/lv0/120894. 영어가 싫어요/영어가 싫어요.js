function solution(numbers) {  
    const num = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    };
    let arr = numbers.split('');
    let str = '';
    let answer = '';
    for(let i of arr) {
        str += i;
        for(let j in num) {
            if(str === j) {
                answer += num[j];
                str = '';
            }
        }
    }
    return Number(answer);
}