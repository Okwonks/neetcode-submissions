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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!subRoot) return true;
        if(!root)    return false;

        if(dfs(root, subRoot)) return true;

        return (this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot));

        function dfs(node, sub) {
            if(!node && !sub) return true;

            if(node && sub && node.val === sub.val) {
                return (dfs(node.left, sub.left) && dfs(node.right, sub.right));
            }

            return false;
        }
    }
}
