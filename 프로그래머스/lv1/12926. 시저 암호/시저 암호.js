function solution(s, n) {
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
                    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    if(alphabet.length + n > alphabet.length) alphabet = alphabet.join('').repeat(2).split('');

    const caesar = s.toUpperCase().split('').map((e, idx) => {
        const index = alphabet.indexOf(e);
        return index === -1 ? e
            : s[idx] === s[idx].toUpperCase() ? alphabet[index+n] : alphabet[index+n].toLowerCase();

    }).join('');
    
    return caesar;
}