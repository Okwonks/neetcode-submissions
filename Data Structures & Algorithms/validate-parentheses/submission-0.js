class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // stack
        // loop through s
        // keep track of open parens
        // if we see a closing paren pop from stack
        // use a hash map
        const parens = { '}':'{', ']':'[', ')':'(' }, stack = [], closing = ']})';
        for(let paren of s) {
            if(!closing.includes(paren)) {
                stack.push(paren);
                continue;
            }

            if(stack.length === 0 || stack[stack.length - 1] !== parens[paren]) {
                return false;
            }

            stack.pop();
        }
        return stack.length === 0;
    }
}
