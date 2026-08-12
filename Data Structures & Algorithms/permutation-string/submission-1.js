class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;
        const charCount = {};
        let len = 0;
        for(const char of s1) {
            len += 1;
            charCount[char] = (charCount[char] || 0) + 1;
        }

        let start = 0;
        for(let end = 0; end < s2.length; end++) {
            if(s2[end] in charCount) {
                charCount[s2[end]] -= 1;
            }

            if(end - start + 1 < len) continue;

            let isMatch = true;
            for(const char in charCount) {
                if(charCount[char] !== 0) {
                    isMatch = false;
                    break;
                }
            }
 
            if(isMatch) return true;

            if(s2[start] in charCount) {
                charCount[s2[start]] += 1;
            }
            start += 1;
        }
        return false;
    }
}
