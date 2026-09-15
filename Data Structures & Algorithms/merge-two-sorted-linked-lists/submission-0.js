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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // Initialise merged head of list to list with smallest val
        let head = new ListNode(0), tail = head;
        // While both lists have next neq to null
        while(list1 !== null && list2 !== null) {
            // update pointer of new head
            if(list1.val < list2.val) {
                tail.next = list1;
                list1 = list1.next;
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;
        }

        // if either list1 or list2 still has values add to the end of head
        if(list1 !== null) tail.next = list1;
        if(list2 !== null) tail.next = list2;

        return head.next;
    }
}
