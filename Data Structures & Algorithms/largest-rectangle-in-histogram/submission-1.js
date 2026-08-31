class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0, start;
        const stack = [];
        for(let i = 0; i < heights.length; i++) {
            start = i;
            while(stack.length > 0 && stack[stack.length - 1].h > heights[i]) {
                const top = stack.pop();
                maxArea = Math.max(maxArea, (i - top.start) * top.h);
                start = top.start;
            }

            stack.push({ h:heights[i], start });
        }

        for(const { h, start } of stack) {
            maxArea = Math.max(maxArea, (heights.length - start) * h);
        }

        return maxArea;
    }
}
