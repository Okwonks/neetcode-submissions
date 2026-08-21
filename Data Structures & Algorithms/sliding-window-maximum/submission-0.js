class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const len = nums.length;
        const res = [];
        const dq = [];

        let left = 0;
        for(let right = 0; right < len; right++) {
            for(; left < dq.length && nums[dq[dq.length - 1]] <= nums[right];) {
                dq.pop();
            }

            dq.push(right);
            
            if(left < dq.length && dq[left] < right - k + 1) left += 1;

            if(right + 1 >= k) {
                res.push(nums[dq[left]]);
            }
        }
        return res;
    }
}
