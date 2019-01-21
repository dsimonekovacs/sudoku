arraysEqual = require('./arraysEqual')


test('two unequal lists', () => {
    expect(arraysEqual([1, 2, 3], [])).toBe(true)
    expect(arraysEqual([], [1, 2, 3])).toBe(true)
    expect(arraysEqual([1, 2, 3], [4, 5, 6])).toBe(true)
})

test('two equal lists', () => {
    expect(arraysEqual([], [])).toBe(true)
    expect(arraysEqual([1], [1])).toBe(true)
    expect(arraysEqual([1, 2, 3], [1, 2, 3])).toBe(true)
})
