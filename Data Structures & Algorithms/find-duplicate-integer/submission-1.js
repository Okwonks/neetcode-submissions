class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let fast = 0, slow = 0;
        // Iterate through the nums array using slow and fast pointer
        for(; ;) {
            fast = nums[nums[fast]];
            slow = nums[slow];
            if(slow === fast) break;
        }

        fast = 0;
        for(; fast !== slow;) {
            fast = nums[fast];
            slow = nums[slow];
        }
        return slow;
    }
}
