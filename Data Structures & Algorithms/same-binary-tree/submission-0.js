/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        // Use BFS and check each level to find similarities
        // return false when values do not match and true otherwise
        const pQueue = [], qQueue = [];
        pQueue.push(p), qQueue.push(q);
        for(; pQueue.length > 0 && qQueue.length > 0;) {
            let len = pQueue.length;
            for(; len > 0; len--) {
                let nodeP = pQueue.pop(), nodeQ = qQueue.pop();
                if(nodeP === null && nodeQ === null) continue;
                if(nodeP === null || nodeQ == null || nodeP.val !== nodeQ.val) return false;

                pQueue.push(nodeP.left);
                pQueue.push(nodeP.right);
                qQueue.push(nodeQ.left);
                qQueue.push(nodeQ.right);
            }
        }
        return true;
    }
}
