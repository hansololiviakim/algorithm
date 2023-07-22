const solution = (arr1, arr2) => {
    if (arr1.length === arr2.length) {
        const len1 = arr1.reduce((acc, cur) => acc + cur, 0);
        const len2 = arr2.reduce((acc, cur) => acc + cur, 0);
        return len1 > len2 ? 1 : len1 === len2 ? 0 : -1;
    }
    return arr1.length > arr2.length ? 1 : -1;
}