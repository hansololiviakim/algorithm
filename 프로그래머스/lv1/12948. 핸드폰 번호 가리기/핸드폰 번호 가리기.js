function solution(phone_number) {
    const str = phone_number.slice(0, -4);
    return phone_number.replace(str, '*'.repeat(str.length));
}