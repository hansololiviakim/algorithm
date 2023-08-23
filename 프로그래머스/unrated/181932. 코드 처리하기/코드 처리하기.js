const solution = (code) => {
    let mode = false;
    let result = '';

    for (let idx = 0; idx < code.length; idx++) {
        if (code[idx] === '1') {
            mode = !mode;
        } else if ((!mode && idx % 2 === 0) || (mode && idx % 2)) {
            result += code[idx]
            
        }
    }
    
    return result === '' ? 'EMPTY' : result;
}