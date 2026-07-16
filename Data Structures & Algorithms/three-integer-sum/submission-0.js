class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        const res = [];
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] === nums[i - 1]) continue;

            let left = i + 1, right = nums.length - 1, sum;
            for(; left < right;) {
                sum = nums[i] + nums[left] + nums[right];
                if(sum === 0) {
                    res.push([nums[i], nums[left], nums[right]]);
                    left++;
                    for(; nums[left] === nums[left - 1] && left < right;) {
                        left++;
                    }
                } else if(sum > 0) {
                    right--;
                } else {
                    left++;
                }
            }
        }
        return res;
    }
}
