class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // > loop through strs
        // > hashmap
        const strMap = {};
        for(const str of strs) {
            const key = str.split('').sort().join('');
            strMap[key] = [...(strMap[key] || []), str];
        }
        return Object.values(strMap);
    }
}
