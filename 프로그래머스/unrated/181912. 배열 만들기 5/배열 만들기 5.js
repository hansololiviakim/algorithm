const solution = (intStrs, k, s, l) => {
    return intStrs.reduce((acc, cur) => {
        if (cur.slice(s, s+l) > k) acc.push(+cur.slice(s, s+l));
        return acc;
    }, [])
}
