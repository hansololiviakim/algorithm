function solution(arr) {
    const filterArr = arr.filter(e => e !== Math.min(...arr));
    return filterArr.length === 0 ? [-1] : filterArr;
}