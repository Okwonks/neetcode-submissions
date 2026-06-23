class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // build encoded string
        // loop through array add each str and # (for encoding)
        // return encoded
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
        // loop through the entire decode string
        // store anything before the # as a number
        // get the substring between character after # and number
        const decoded = [];
        for(let i = 0; i < str.length;) {
            let num = '';
            for(; str[i] !== '#';) {
                num += str[i];
                i += 1;
            }
            num = Number(num);
            i += 1;
            const end = i + num;
            decoded.push(str.substring(i, end));
            i = end;
        } 
        return decoded;
    }
}
