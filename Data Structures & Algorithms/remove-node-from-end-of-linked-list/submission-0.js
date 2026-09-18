/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // Initialise node(dummy) and 2 points fast and slow (still ?)
        // Have slow initialised as a new node with next being head
        let node = new ListNode(0, head), fast = head, slow = node;
        // Move fast pointers forward by n
        for(; n > 0;) {
            fast = fast.next;
            n--;
        }
        // Move both pointers until fast is at the end of the list
        for(; fast !== null;) {
            slow = slow.next;
            fast = fast.next;
        }
        // Point the current slow.next to slow.next.next
        slow.next = slow.next.next;
        // return node.next
        return node.next;
    }
}
