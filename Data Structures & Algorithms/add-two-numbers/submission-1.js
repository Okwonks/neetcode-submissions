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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        // Initialise a node for the answer
        const answer = new ListNode(0);
        // Setup a pointer to handle linking the answer vals
        // Initialise carry storing the carry value from the sums
        let ansList = answer, carry = 0;
        // Iterate through l1 and l2, while they are not null and carry is not zero
        for(; l1 !== null || l2 !== null || carry > 0;) {
            // Read the value from each list default to 0 if it doesn't exist
            const num1 = l1?.val ?? 0;
            const num2 = l2?.val ?? 0;
            // Compute the sum plus what was carried forward
            const sum = num1 + num2 + carry;
            // Update carry based on current sum
            carry = Math.floor(sum / 10);
            // Add the new node for the digit (sum % 10)
            ansList.next = new ListNode(sum % 10);
            // Move pointers on l1, l2 and answer
            ansList = ansList.next;
            if(l1) l1 = l1.next;
            if(l2) l2 = l2.next;
        }
        // Return answer node next
        return answer.next;
    }
}
