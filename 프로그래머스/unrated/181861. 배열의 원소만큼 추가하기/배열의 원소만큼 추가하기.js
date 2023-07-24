const solution = (arr) => {
    let X = '';
    arr.map(e => X += ` ${e}`.repeat(e));
    return X.split(' ').slice(1, X.length).map(e => +e);
}