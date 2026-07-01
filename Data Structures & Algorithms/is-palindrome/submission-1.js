class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // > Two Pointers
        // convert string to lowercase and remove spaces
        // check string from both sides
        s = s.toLowerCase()
            .replace(/\s/g, '')
            .replace(/[^a-z0-9]/g, '');
        let right = s.length - 1;
        for(let left = 0; left < right; left++) {
            if(s[left] !== s[right]) return false;
            right--;
        }
        return true;
    }
}
