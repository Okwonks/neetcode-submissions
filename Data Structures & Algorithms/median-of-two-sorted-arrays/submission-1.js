class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let smaller = nums1, bigger = nums2;
        const total = nums1.length + nums2.length,
          half = Math.floor(total / 2);
        
        if(smaller.length > bigger.length) [smaller, bigger] = [bigger, smaller];

        let left = 0, right = smaller.length - 1;
        for(; ;) {
            let i = Math.floor((left + right) / 2);
            let j = half - i - 2;

            let sLeft = smaller[i] ?? -Infinity,sRight = smaller[i + 1] ?? Infinity;
            let bLeft = bigger[j] ?? -Infinity, bRight = bigger[j + 1] ?? Infinity;
            
            if(sLeft <= bRight && bLeft <= sRight) {
                if(total % 2 !== 0) return Math.min(sRight, bRight);
                return (Math.max(sLeft, bLeft) + Math.min(sRight, bRight)) / 2;
            } else if(sLeft > bRight) {
                right = i - 1;
            } else {
                left = i + 1;
            }
        }
    }
}
