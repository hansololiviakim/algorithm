const solution = (my_string) => {
    let answer = [];
    for (let i = my_string.length - 1; i >= 0; i--) answer.push(my_string.slice(i));
    return answer.sort();
}