function solution(strArr) {
    return strArr.map((e, idx) => idx % 2 ? e.toUpperCase() : e.toLowerCase());
}