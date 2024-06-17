/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 */

// @lc code=start

function removeElement(nums: number[], val: number): number {
  let k = 0
  let fast = 0

  for (; fast < nums.length; fast = fast + 1) {
    if (nums[fast] !== val) {
      nums[k] = nums[fast]
      k = k + 1
    } else {
    }
  }

  return k
}

// @lc code=end

export { removeElement }
