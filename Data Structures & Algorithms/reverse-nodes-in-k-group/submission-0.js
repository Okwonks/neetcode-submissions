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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        // Initialise a dummy list pointing to head
        const dummy = new ListNode(0, head);
        // Have a reference pointer to the prev group being processed
        let prevGroup = dummy;
        // Write a helper getting the kth node (node at the end of the group)
        // Build reverse based of off dummy
        for(;;) {
            // Find the kth node
            const node = findKth(prevGroup, k);
            if(!node) break;
            // store the next group
            const nextGroup = node.next;
            // reverse the pointers, with prev pointing to prev group's next
            let prev = node.next, curr = prevGroup.next;
            for(; curr !== nextGroup;) {
                const temp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = temp;
            }
            // update prev groups pointer
            const temp = prevGroup.next;
            prevGroup.next = node;
            prevGroup = temp;
        }
        // return dummy.next
        return dummy.next;

        function findKth(curr, n) {
            for(; curr !== null && n > 0; n--) {
                curr = curr.next;
            }
            return curr;
        }
    }
}
