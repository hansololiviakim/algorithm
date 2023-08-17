const solution = (sizes) => {
    let maxes = [];
    let mins = [];
    sizes.map(e => [Math.max(...e), Math.min(...e)])
         .map(v => {
            maxes.push(v[0]);
            mins.push(v[1]);
         })
    return Math.max(...maxes) * Math.max(...mins);
}