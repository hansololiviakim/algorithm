function solution(num_list) {
    const lastNum = num_list[num_list.length - 1];
    const beforeNum = num_list[num_list.length - 2];
    lastNum > beforeNum ? num_list.push(lastNum - beforeNum) : num_list.push(lastNum * 2);
    return num_list;
}