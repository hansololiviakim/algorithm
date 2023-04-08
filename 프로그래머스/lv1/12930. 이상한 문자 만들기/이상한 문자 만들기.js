function solution(s) {
    const arr = s.toUpperCase().split(' ');
    return arr.map(word => {
        return word.split('').map((spell, idx) => {
            return idx % 2 ? spell.toLowerCase() : spell.toUpperCase();
        }).join('');
    }).join(' ');
}