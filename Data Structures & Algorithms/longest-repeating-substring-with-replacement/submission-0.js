class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // 2 - sliding window, hashmap
        // count frequencies, keep track of maxFreq
        const charCount = {};
        let maxFreq = 0, left = 0, longest = 0;
        for(let right = 0; right < s.length; right++) {
            let curr = s[right];
            charCount[curr] = (charCount[curr] || 0) + 1;
            maxFreq = Math.max(maxFreq, charCount[curr]);

            if((right - left + 1) - maxFreq > k) {
                charCount[s[left++]] -= 1;
            }
            
            longest = Math.max(longest, right - left + 1);
        }
        return longest;
    }
}
