const solution = (num_list) => {
    let odd = 0, even = 0;
    num_list.map((e, idx) => (idx + 1) % 2 ? odd += e : even += e);
    return Math.max(odd, even);
}