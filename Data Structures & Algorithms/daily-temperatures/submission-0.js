class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [],
          res = Array(temperatures.length).fill(0);
        for(let i = 0; i < temperatures.length; i++) {
            const curr = temperatures[i];
            for(; stack.length > 0 && stack[stack.length - 1][0] < curr;) {
                const [, idx] = stack.pop();
                res[idx] = i - idx;
            }
            stack.push([curr, i]);
        }
        return res;
    }
}
