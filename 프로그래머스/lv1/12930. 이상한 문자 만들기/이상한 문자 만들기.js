function solution(s) {
    let word = s.split(' ');
    let wierdword = ""
    for(let i of word){
        for(let j = 0; j < i.length; j++) {
            !(j % 2) ? wierdword += i[j].toUpperCase(j) : wierdword += i[j].toLowerCase(j);
        }
        wierdword += ' ';
    }
    return wierdword.substring(0, wierdword.length - 1);
}