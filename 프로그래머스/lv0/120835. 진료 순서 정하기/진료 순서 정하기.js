function solution(emergency) {
    const sortArr = [...emergency].sort((a, b) => b - a);
    return emergency.map(e => sortArr.indexOf(e) + 1);
}