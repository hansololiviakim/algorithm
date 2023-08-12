const solution = (n_str) => {
    const num = [...n_str].findIndex(e => e !== '0');
    return n_str.slice(0, num).replace(/0/g, '') + n_str.slice(num);
}