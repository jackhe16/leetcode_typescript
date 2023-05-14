/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 */

// @lc code=start

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i += 1) {
    const item = nums[i];
    const key = target - item;
    const value = map.get(key);
    if (value !== undefined) {
      return [value, i];
    }
    map.set(item, i);
  }

  return [];
}

// @lc code=end

export { twoSum };
