class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // > two pointers
        // > left, right pointers
        // > start at 0, numbers.length - 1
        // left = 0, right = numbers.length - 1;
        // for left < right:
        //   sum = nums[left] + nums[right]
        //   if sum > target
        //     right--;
        //   else sum < target
        //     left++
        //   else
        //      return [nums[left], nums[right]]
        let rightIdx = numbers.length - 1, sum = 0;
        for(let leftIdx = 0; leftIdx < rightIdx;) {
            sum = numbers[leftIdx] + numbers[rightIdx];
            if(sum === target) return [leftIdx + 1, rightIdx + 1];
            if(sum > target) {
                rightIdx -= 1;
            } else {
                leftIdx += 1;
            }
        }
    }
}
