/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 */

// @lc code=start

function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1
  let mid: number

  while (left <= right) {
    mid = (left + right) >> 1
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    }
  }

  return -1
}

// @lc code=end

export { search }
