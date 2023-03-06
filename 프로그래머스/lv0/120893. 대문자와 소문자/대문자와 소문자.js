function solution(my_string) {
    let arr = my_string.split('');
    let str = '';
    for(let i of arr) {
        if(i === i.toUpperCase()) {
            i = i.toLowerCase();
            str += i;
        } else {
            i = i.toUpperCase();
            str += i;
        }
    }
    return str;
}