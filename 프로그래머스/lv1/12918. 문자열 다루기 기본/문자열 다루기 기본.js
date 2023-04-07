function solution(s) {  
    const lengthChk = s.length === 4 || s.length === 6;
    const engChk = /\D/.test(s);
    return lengthChk && !engChk ? true : false;
}