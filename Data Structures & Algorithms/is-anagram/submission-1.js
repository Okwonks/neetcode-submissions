class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if(s.length !== t.length) return false;
    const stringMap = {}, testMap = {};
    for(let i = 0; i < s.length; i++) {
      let sChar = s[i], tChar = t[i];
      stringMap[sChar] = (stringMap[sChar] || 0) + 1;
      testMap[tChar] = (testMap[tChar] || 0) + 1;
    }

    for(const key in stringMap) {
      if(stringMap[key] !== testMap[key]) return false;
    }
    return true;
  }
}
