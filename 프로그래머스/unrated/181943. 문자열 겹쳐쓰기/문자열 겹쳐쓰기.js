const solution = (my_string, overwrite_string, s) => {
    const frontStr = my_string.slice(0, s);
    const backStr = my_string.slice(s + overwrite_string.length, my_string.length);
    return frontStr + overwrite_string + backStr;
}