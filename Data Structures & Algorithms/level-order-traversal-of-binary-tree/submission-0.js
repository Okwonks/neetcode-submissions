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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];
        // Use BFS to identify nodes on the same level
        const res = [], queue = [[0, root]];
        for(; queue.length > 0;) {
            const [lvl, curr] = queue.pop();
            res[lvl] = [ curr.val, ...(res[lvl] || [])];

            if(curr.left)  queue.push([lvl + 1, curr.left]);
            if(curr.right) queue.push([lvl + 1, curr.right]);
        }
        return res;
    }
}
