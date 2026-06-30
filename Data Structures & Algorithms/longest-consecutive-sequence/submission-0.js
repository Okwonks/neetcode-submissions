class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums);
        let longest = 0;
        for(const num of nums) {
            if(numsSet.has(num - 1)) continue;
            let length = 0;
            for(; numsSet.has(num + length);) {
                length += 1;
            }
            longest = Math.max(longest, length);
        }
        return longest;
    }
}
