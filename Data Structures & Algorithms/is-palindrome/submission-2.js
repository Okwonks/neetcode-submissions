class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(str) {
        let right = str.length - 1;
        for(let left = 0; left < right;) {
            if(!this.isAlphanumeric(str[left])) {
                left += 1;
                continue;
            }

            if(!this.isAlphanumeric(str[right])) {
                right -= 1;
                continue;
            }

            if(str[left].toLowerCase() !== str[right].toLowerCase()) return false;
            left += 1;
            right -= 1;
        }
        return true;
    }

    isAlphanumeric(char) {
        return (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') ||
               (char >= '0' && char <= '9');
    }
}
