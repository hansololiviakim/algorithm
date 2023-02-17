function solution(array, height) {
    let people = [];
    for(let i = 0; i <= array.length; i++) {
        if(height < array[i]) {
            people.push(array[i]);
        }
    }
    return people.length;
}