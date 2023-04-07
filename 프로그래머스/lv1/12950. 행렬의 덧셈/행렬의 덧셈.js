function solution(arr1, arr2) {
    return arr1.map((array, index) => array.map((e, idx) => e + arr2[index][idx]));
}