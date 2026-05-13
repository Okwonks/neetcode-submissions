class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = '';
        for(const str of strs) {
            encoded += str.length + '#' + str;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = [];
        for(let i = 0; i < str.length;) {
            let num = '';
            while(str[i] !== "#") {
                num += str[i];
                i += 1;
            }
            num = parseInt(num);
            i += 1; 
            const s = str.substring(i, i + num);
            decoded.push(s);
            i = i + num;
        }
        return decoded;
    }
}
