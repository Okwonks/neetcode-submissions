class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const dict = {};
    let curr, rem;
    for(let i = 0; i < nums.length; i++) {
      curr = nums[i];
      rem = target - curr;
      if(rem in dict) {
        return [dict[rem], i];
      }
      dict[curr] = i;
    }
  }
}
