// 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 sort한다.
function solution(strings, n) {
    
    let answer = strings.sort(function(a, b) {
        a.at(n) > b.at(n) ? -1 : 1
    });
    
    
    return answer;
}