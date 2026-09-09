class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // > binary search
        const rows = matrix.length - 1, cols = matrix[0].length - 1;
        // Initiate top, bottom representing the rows
        let top = 0, bottom = rows;
        // Iterate through the matrix
        for(; top <= bottom;) {
            // Binary search on row
            const row = Math.floor((top + bottom) / 2);
            // if target could exist in row, run binary search on values in row
            if(target >= matrix[row][0] && target <= matrix[row][cols]) {
                // Initialise left and right pointers
                let left = 0, right = cols;
                const nums = matrix[row];
                for(; left <= right;) {
                    // Find mid point in row
                    const mid = Math.floor((left + right) / 2);
                    // if mid eq target return true
                    if(target === nums[mid]) return true;
                    if(target < nums[mid]) {
                        // if mid lt target move left
                        right = mid - 1;
                    } else {
                        // if mid gt target move right
                        left = mid + 1;
                    }
                }
                return false;
            // move top if target > all values in row; bottom it target < all values in row
            } else if(target > matrix[row][cols]) {
                top = row + 1;
            } else {
                bottom = row - 1;
            }
        }
        // return false; this means target is nowhere to be seen
        return false;
    }
}
