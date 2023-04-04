function solution(s){
    const str = s.toLowerCase();
    let p = 0, y = 0;
    for(let i of str) {
        if(i === 'p') p++;
        if(i === 'y') y++;
    }
    return p === y ? true : false;
}