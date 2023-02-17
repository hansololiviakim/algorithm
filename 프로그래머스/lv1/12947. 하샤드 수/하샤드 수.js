// x의 자릿수의 합으로 x가 나누어져야 합니다
// 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
function solution(x) {
    let str = String(x).split('');
    let sum = 0;
    for(let i = 0; i < str.length; i++) sum += Number(str[i]);
    return x % sum === 0 ? true : false;    
}