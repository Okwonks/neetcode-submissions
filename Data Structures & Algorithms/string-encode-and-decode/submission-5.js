class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(!strs.length) return 'empty';
        return strs.join('$#');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str === 'empty') return [];
        return str.split('$#');
    }
}
