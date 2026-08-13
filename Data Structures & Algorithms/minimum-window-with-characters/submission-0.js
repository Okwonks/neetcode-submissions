class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(!t.length) return '';

        const freqT = {};
        for(const char of t) {
            freqT[char] = (freqT[char] || 0) + 1;
        }

        const window = {};
        let have = 0, need = Object.keys(freqT).length, res = [-1, -1], resLen = Infinity;
        let left = 0;
        for(let right = 0; right < s.length; right++) {
            const curr = s[right];
            window[curr] = (window[curr] || 0) + 1;
            if((curr in freqT) && window[curr] === freqT[curr]) {
                have += 1;
            }

            for(; have === need; ) {
                if(right - left + 1 < resLen) {
                    resLen = right - left + 1;
                    res = [left, right];
                }
                window[s[left]] -= 1;
                if(s[left] in freqT && window[s[left]] < freqT[s[left]]) {
                    have -= 1;
                }
                left += 1;
            }
        }
        return s.substring(res[0], res[1] + 1);
    }
}
