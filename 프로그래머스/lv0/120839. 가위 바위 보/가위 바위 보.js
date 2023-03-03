function solution(rsp) {
    let arr = rsp.split('');
    let win = '';
    for(let i of arr) i == 0 ? win += '5' : i == 2 ? win += '0' : win += '2';
    return win;
}