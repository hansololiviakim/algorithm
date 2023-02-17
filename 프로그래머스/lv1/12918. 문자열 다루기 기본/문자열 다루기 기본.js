function solution(s) {  
    let lengthChk = (s.length === 4) || (s.length === 6)
    let engChk = /[a-z|A-Z]/.test(s);
    return lengthChk && !engChk ? true : false;
}