function solution(s){
    let p = 0;
    let y = 0;
    for(let i = 0; i < s.length; i++) {
        if(s.toLowerCase().charAt(i) === 'p') p++;
        if(s.toLowerCase().charAt(i) === 'y') y++;
    }
    return p === y ? true : false
}