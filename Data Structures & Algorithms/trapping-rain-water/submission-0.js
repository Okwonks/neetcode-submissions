class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(!height.length) return 0;

        let left = 0, right = height.length - 1;
        let maxLeft = height[left], maxRight = height[right];

        let res = 0;
        for(; left < right;) {
            if(maxLeft < maxRight) {
                left += 1;
                maxLeft = Math.max(maxLeft, height[left]);
                res += maxLeft - height[left];
            } else {
                right -= 1;
                maxRight = Math.max(maxRight, height[right]);
                res += maxRight - height[right];
            }
        }
        return res;
    }
}
