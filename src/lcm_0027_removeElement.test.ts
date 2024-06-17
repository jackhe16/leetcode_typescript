import { removeElement } from './lcm_0027_removeElement'

describe('lcm_0027_removeElement', () => {
  test('1', () => {
    const nums = [3, 2, 2, 3]
    expect(removeElement(nums, 3)).toBe(2)
    expect(nums).toStrictEqual([2, 2, 2, 3])
  })

  test('2', () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2]
    expect(removeElement(nums, 2)).toBe(5)
    expect(nums).toStrictEqual([0, 1, 3, 0, 4, 0, 4, 2])
  })
})
