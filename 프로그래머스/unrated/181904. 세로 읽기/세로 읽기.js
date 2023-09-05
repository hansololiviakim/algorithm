const solution = (my_string, m, c) => {
    let str = '';
    for (let i = 0; i < my_string.length; i += m) {
        str += my_string.substr(i, m)[c-1];
    }
    return str;
}