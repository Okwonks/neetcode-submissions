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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(!lists.length) return null;

        for(; lists.length > 1;) {
            const merged = [];
            for(let i = 0; i < lists.length; i+=2) {
                let list1 = lists[i], list2 = lists[i+1] || null; 
                merged.push(this.mergeSorted(list1, list2));
            }
            lists = merged;
        }
        return lists[0];
    }

    mergeSorted(list1, list2) {
        let node = new ListNode(), head = node;
        for(; list1 !== null && list2 !== null;) {
            if(list1.val < list2.val) {
                head.next = list1;
                list1 = list1.next;
            } else {
                head.next = list2;
                list2 = list2.next;
            }
            head = head.next;
        }

        if(list1 !== null) head.next = list1;
        if(list2 !== null) head.next = list2;
        return node.next;
    }
}
