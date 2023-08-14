const solution = (myString, pat) => {
    let answer = 0;
    for (let i = 0; i < myString.length; i++) {
        myString.slice(i, i + pat.length) === pat ? answer++ : 0;
    }
    return answer;
}