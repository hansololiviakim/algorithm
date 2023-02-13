function solution(sizes) {
    let longer = [];
    let shorter = [];
    
    for(i in sizes) {
        if(sizes[i][0] > sizes[i][1]){
            longer.push(sizes[i][0]);
            shorter.push(sizes[i][1]);
        }else{
             longer.push(sizes[i][1]);
             shorter.push(sizes[i][0]);
        }
    }
    
    biggerSideMax = Math.max(...longer);
    smallerSideMax = Math.max(...shorter);
    return biggerSideMax * smallerSideMax;
}