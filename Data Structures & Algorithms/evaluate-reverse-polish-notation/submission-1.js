class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        // stack
        // > add numbers to the stack
        // > get to an operator, use it for items in the stack so far
        /**
         * ops = { op: (a, b) => a op b }
         * stack = [], res
         * for t of tokens
         *   if t nin ops
         *     stack.push(t)
         *     continue
         */
        const OPS = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => Math.trunc(a / b), 
        };

        const stack = [];
        for(const token of tokens) {
            if(token in OPS) {
                const [b, a] = [stack.pop(), stack.pop()];
                const op = OPS[token];
                stack.push(op(a, b));
                continue;
            }
            stack.push(Number(token));
        }
        return stack.pop();
    }
}
