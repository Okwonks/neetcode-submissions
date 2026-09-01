class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0, right = nums.length - 1;
        for(; left <= right; ) {
            const mid = left + Math.floor((right - left) / 2);
            if(nums[mid] > target) {
                right = mid - 1;
            } else if(nums[mid] < target) {
                left = mid + 1;
            } else if(nums[mid] === target) {
                return mid;
            }
        }
        return -1;
    }
}
