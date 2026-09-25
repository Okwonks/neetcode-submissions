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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root) return root;

        let tree = new TreeNode(root.val)
        tree.left = this.traverse(root.right);
        tree.right = this.traverse(root.left);
        return tree;
    }

    traverse(node=null) {
        if(!node) return node;

        let leaf = new TreeNode(node.val);
        leaf.left = this.traverse(node.right);
        leaf.right = this.traverse(node.left);
        return leaf;
    }
}
