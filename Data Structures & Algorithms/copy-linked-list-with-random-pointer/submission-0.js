// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const mappedCopy = new Map([[null, null]]);
        let curr = head;
        for(; curr !== null;) {
            mappedCopy.set(curr, new Node(curr.val));
            curr = curr.next;
        }

        curr = head;
        for(; curr !== null;) {
            const copy = mappedCopy.get(curr);
            copy.next = mappedCopy.get(curr.next);
            copy.random = mappedCopy.get(curr.random);
            curr = curr.next;
        }

        return mappedCopy.get(head);
    }
}
