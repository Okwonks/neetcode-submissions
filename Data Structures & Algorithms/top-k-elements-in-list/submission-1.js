class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // > count the nums in the array
        // > res array with nums count >= k
        // build the freq
        const freq = {};
        for(const num of nums) {
            freq[num] = (freq[num] || 0) + 1;
        }
        // build the result
        const res = Object.keys(freq)
            .sort((a, b) => freq[b] - freq[a]);
        return res.slice(0, k).map(Number);
    }
}
