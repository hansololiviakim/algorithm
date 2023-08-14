const solution = (s) => {
    const arr = s.split(' ');
    return arr.reduce((acc, cur, idx) => cur !== 'Z' ? acc + +cur : acc - +arr[idx - 1], 0);
}