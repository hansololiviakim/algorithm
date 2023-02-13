function solution(sizes) {
    
    for(i = 0; i < sizes.length; i++) {
        if(sizes[i][0] > sizes[i][1]) {
            sizeComparison(sizes[i], 0);
        }else{
            sizeComparison(sizes[i], 1);
        }
    }
    
    // return biggerSideMax * smallerSideMax;
}


function sizeComparison(size, num){
    let biggerSideMax = 0;
    let smallerSideMax = 0;
    
    // console.log(num)

    if(size[num] > biggerSideMax) {
        biggerSideMax = size[num];
    }
    if(size[num] > smallerSideMax) {
        smallerSideMax = size[num];
    }
}