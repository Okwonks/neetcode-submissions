class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // > loop through the entire sudoku board
        // > check that each are valid; row, col and square
        // > return false immediately any violate uniqueness
        // len = len(board)
        // rows = {}, cols = {}, squares = {}
        // for(rows < len)
        //   for(cols < len)
        //     curr = board[r][c]
        //     sqKey = floor(r/3), floor(c/3)
        //     if rows[r][curr] || cols[c][curr] || squares[sqKey][curr]; return false
        //     > add curr to col, row and square
        const len = board.length;
        const rows = {}, cols = {}, squares = {};
        let sqKey, curr;
        for(let row = 0; row < len; row++) {
            for(let col = 0; col < len; col++) {
                curr = board[row][col];
                if(curr === '.') continue;
                sqKey = `${Math.floor(row/3)}, ${Math.floor(col/3)}`;
                if(rows[row]?.has(curr) || cols[col]?.has(curr) || squares[sqKey]?.has(curr)) {
                    return false;
                }
                rows[row] = (rows[row] || new Set()).add(curr);
                cols[col] = (cols[col] || new Set()).add(curr);
                squares[sqKey] = (squares[sqKey] || new Set()).add(curr);
            }
        }
        return true;
    }
}
