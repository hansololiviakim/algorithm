function solution(phone_number) {        
    let answer = ""
    for(let i = 0; i < phone_number.length - 4; i++) answer += phone_number[i].replace(phone_number[i], '*');
    return answer + phone_number.substring(phone_number.length - 4, phone_number.length)
}