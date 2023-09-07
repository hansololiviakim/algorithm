const solution = (n, lost, reserve) => {
    let getClothes = n - lost.length;
    let newLost = [];
    
    // 도난 당한 학생 === 여벌 옷 있는 학생 지우기
    lost.map(v => {
        if (reserve.includes(v)) {
            reserve.splice(reserve.indexOf(v), 1);
            getClothes++;
        } else {
            newLost.push(v);
        }
    });
    
    // 남은 학생들 정렬
    newLost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
        
    // 나머지 학생 체육복 분배  
    newLost.forEach(v => {
        const findIdx = reserve.findIndex(e => e === v - 1 || e === v + 1);
        if (findIdx !== -1) {
            reserve.splice(findIdx, 1);
            getClothes++;
        }
    });
    
    return getClothes;
}