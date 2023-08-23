const solution = (arr) => {
    let i = 0;
    let stk = [];
    
    while (i < arr.length) {
        const last = stk[stk.length-1];
        if (!last || last < arr[i]) {
            stk.push(arr[i]);
            i++;
        } else {
            stk.pop();
        }
    }
    
    return stk;
}