class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0, right = 1, maxProfit = 0;
        for(; right < prices.length; right++) {
            if(prices[left] > prices[right]) {
                left = right;
                continue;
            }
            maxProfit = Math.max(maxProfit, (prices[right] - prices[left]));
        }
        return maxProfit;
    }
}
