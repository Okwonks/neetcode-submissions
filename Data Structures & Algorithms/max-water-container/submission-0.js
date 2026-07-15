class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let right = heights.length - 1, maxArea = 0;
        for(let left = 0; left < right; left++) {
            const currArea = (right - left) * Math.min(heights[left], heights[right]);
            maxArea = Math.max(maxArea, currArea);
            if(heights[left] > heights[right]) {
                left -= 1;
                right -= 1;
            }
        }
        return maxArea;
    }
}
