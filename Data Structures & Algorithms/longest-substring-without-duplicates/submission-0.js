class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let longest = 0, left = 0;
        for(const char of s) {
            for(; set.has(char);) {
                set.delete(s[left++]);
            }
            set.add(char);
            longest = Math.max(longest, set.size);
        }
        return longest;
    }
}
