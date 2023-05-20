function solution(num_list) {
    const odd = num_list.filter(e => e % 2).join('');
    const even = num_list.filter(e => !(e % 2)).join('');
    return +odd + +even;
}