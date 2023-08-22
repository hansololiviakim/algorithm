function solution(numbers) {
    // 모든 숫자가 0인 경우 처리
    if (numbers.every(num => num === 0)) {
        return '0';
    }

    // 숫자를 문자열로 변환하여 비교하기 위한 비교 함수
    const compare = (a, b) => {
        const strA = a.toString();
        const strB = b.toString();
        return (strB + strA) - (strA + strB);
    };

    // 주어진 숫자 배열을 비교 함수를 사용하여 정렬
    numbers.sort(compare);
    
    // 정렬된 숫자들을 문자열로 이어붙여서 반환
    return numbers.join('');
}