const solution = (ineq, eq, n, m) => {
    if (eq === '=' && ineq === '>') {
        return n >= m ? 1 : 0;
    } else if (eq === '=' && ineq === '<') {
        return n <= m ? 1 : 0;
    } else if (ineq === '>') {
        return n > m ? 1 : 0;
    } else {
        return n < m ? 1 : 0;
    }
}