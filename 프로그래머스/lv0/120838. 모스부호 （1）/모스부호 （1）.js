function solution(letter) {
    const morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    };

    const arr = letter.split(' ');
    let str = '';
    for(let i = 0; i < arr.length; i++) {
        if(Object.hasOwn(morse, arr[i])) {
            str += morse[arr[i]];
        }
    }
    return str;
}