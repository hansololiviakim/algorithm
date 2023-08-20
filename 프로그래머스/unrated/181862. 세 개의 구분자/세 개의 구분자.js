const solution = (myStr) => {
    const arr = myStr.replace(/[a, b, c]/g, ' ').split(' ').filter(e => e !== '')
    return arr.length === 0 ? ['EMPTY'] : arr;
}