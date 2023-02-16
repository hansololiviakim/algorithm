function solution(s) {
    let regex = /[a-z|A-Z]/;    
    let lengthChk = (s.length === 4) || (s.length === 6)
    let engChk = regex.test(s);
    return lengthChk && !engChk ? true : false;
}