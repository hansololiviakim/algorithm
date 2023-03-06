function solution(my_string) {
    const arr = my_string.split('');
    const uniqueArr = arr.filter((element, index) => {
        return arr.indexOf(element) === index;
    });
    return uniqueArr.join('');
}