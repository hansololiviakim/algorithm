const solution = (arr) => {
    return arr[1] / arr[0] === arr[2] / arr[1]
    ? arr[1] / arr[0] * arr[arr.length - 1]
    : arr[1] - arr[0] + arr[arr.length - 1];
}