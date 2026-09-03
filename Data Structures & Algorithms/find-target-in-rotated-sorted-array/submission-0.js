class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0, right = nums.length - 1;
        for(; left < right;) {
            const mid = Math.floor((left + right) / 2);
            if(nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        const pivot = left;
        const leftRes = _search(0, pivot - 1);
        if(leftRes !== -1) {
            return leftRes;
        }
        return _search(pivot, nums.length - 1);

        function _search(l, r) {
            let mid;
            for(; l <= r;) {
                mid = Math.floor((l + r) / 2);
                if(nums[mid] === target) {
                    return mid;
                } else if(nums[mid] < target) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
            return -1;
        }
    }
}
