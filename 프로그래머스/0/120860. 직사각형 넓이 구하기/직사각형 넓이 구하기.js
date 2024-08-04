const solution = (dots) => {
    const { x, y } = dots.reduce((acc, [curX, curY]) => {
        acc.x.add(curX)
        acc.y.add(curY)
        return acc
    }, { x: new Set(), y: new Set() })
    const xCrd = [...x]
    const yCrd = [...y]
    
    const isSignSame = (arr) => Math.sign(arr[0]) === Math.sign(arr[1])
    
    const xDistanceSum = isSignSame(xCrd)
        ? Math.abs(xCrd[0] - xCrd[1]) : Math.abs(xCrd[0]) + Math.abs(xCrd[1])
    const yDistanceSum = isSignSame(yCrd)
        ? Math.abs(yCrd[0] - yCrd[1]) : Math.abs(yCrd[0]) + Math.abs(yCrd[1])
    
    return xDistanceSum * yDistanceSum
}