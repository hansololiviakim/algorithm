function solution(my_string, queries) {
    let str = [...my_string];
    for (let [s, e] of queries) {
        const rev = str.slice(s, e+1).reverse();
        str.splice(s, e-s+1, ...rev)
    }
    return str.join('');
}