const solution = (s) => {
    let minusZero = 0;
    let count = 0;
    
    while (s !== '1') {
        const originLen = s.length;
        s = s.replaceAll(/[0]/g, '');
        minusZero += originLen - s.length;
        s = s.length.toString(2);
        count++;
    }
    
    return [count, minusZero];
}