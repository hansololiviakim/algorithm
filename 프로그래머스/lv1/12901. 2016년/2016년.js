function solution(a, b) {
    const DATE = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let inputDay = new Date(`2016-${a}-${b}`);
    let getDay = inputDay.getDay();
    return DATE[getDay]
}