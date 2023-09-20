const solution = (board, k) => {
    const col = board.length;
    const row = board[0].length;
    let result = 0;

    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            if (i + j <= k) {
                result += board[i][j];
            }
        }
    }
    
    return result;
}