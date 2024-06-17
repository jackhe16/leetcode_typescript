import { search } from './lcm_0704_search'

describe('lcm_0704_search', () => {
  test('1', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toEqual(4)
  })

  test('2', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1)
  })
})
