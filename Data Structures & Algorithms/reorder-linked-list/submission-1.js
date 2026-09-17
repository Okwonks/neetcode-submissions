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
     * @return {void}
     */
    reorderList(head) {
        // Initiate two pointers fast and slow
        let fast = head, slow = head; // might need to initialise as a new node
        // Move through the linked list until fast is out of bounds
        for(; fast !== null && fast.next !== null;) {
            slow = slow.next;
            fast = fast.next.next;
        }
        // Move slow by 1 position and reverse the remaining part of the list (50/50)
        let prev = null, curr = slow.next;
        slow.next = null;
        for(; curr !== null;) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        // Point fast back to the start of the list
        let original = head, rev = prev;
        // Update pointers while moving through fast
        while(rev !== null) {
            const tmpOrig = original.next, tmpRev = rev.next;
            original.next = rev;
            rev.next = tmpOrig;
            original = tmpOrig, rev = tmpRev;
        }
    }
}
