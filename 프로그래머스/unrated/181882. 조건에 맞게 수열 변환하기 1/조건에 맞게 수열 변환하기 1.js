const solution = (arr) => arr.map(e => (e < 50 && e % 2) ? e * 2 : (e >= 50 && e % 2 === 0) ? e / 2 : e)