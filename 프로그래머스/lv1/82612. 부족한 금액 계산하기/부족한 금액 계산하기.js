function solution(price, money, count) {
    let cost = 0;
    for(i = 1; i <= count; i++) cost += price * i;
    return money < cost ? cost - money : 0
}