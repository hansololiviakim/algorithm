function solution(a, b) {
    const DATE = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let str = `2016-${a}-${b}`;
    let inputDay = new Date(str);
    let getDay = inputDay.getDay();
    return DATE[getDay]
}