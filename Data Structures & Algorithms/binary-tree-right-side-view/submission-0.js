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
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];

        const queue = [root], res = [];
        for(; queue.length > 0;) {
            let rightMost = null, len = queue.length;
            for(let i = 0; i < len; i++) {
                let node = queue.shift();
                if(node) {
                    rightMost = node;
                    queue.push(node.left);
                    queue.push(node.right);
                }
            }

            if(rightMost !== null) res.push(rightMost.val);
        }
        return res;
    }
}
