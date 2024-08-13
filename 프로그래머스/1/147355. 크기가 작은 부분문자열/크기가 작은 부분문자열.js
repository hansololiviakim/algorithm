const solution = (t, p) => {
    const len = p.length
    let result = 0
    for (let i = 0; i < t.length - len + 1; i++) {
        const num = t.slice(i, len + i)
        if (num <= p) result++
    }
    return result
}