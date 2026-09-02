class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // binary search
        // Initialise left and right pointers, store initial min as nums[0]
        let left = 0, right = nums.length - 1, min = nums[0];
        // handle binary search loop
        for(; left <= right;) {
            if(nums[left] <= nums[right]) {
                min = Math.min(min, nums[left]);
                break;
            }

            const mid = Math.floor((right + left) / 2);
            min = Math.min(min, nums[mid]);
            if(nums[left] <= nums[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return min;
    }
}
