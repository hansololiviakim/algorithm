function solution(arr) {
    let stk = [];
    for(let i = 0; i < arr.length; i++) {
        if(stk.length === 0) {
            stk.push(arr[i]);
            continue;
        } else if( stk[stk.length - 1] === arr[i] ) {
            stk.pop();
        } else {
            stk.push(arr[i]);
        }
        i + 1;
    }
    return stk.length === 0 ? [-1] : stk;
}