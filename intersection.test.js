const intersection = require('./intersection')


test('intersection of two sets', () => {
    a = new Set([1, 2, 3])
    b = new Set([1, 2, 3])
    expect(intersection(a, b)).toMatchObject(new Set([1, 2, 3]))

    a = new Set([])
    b = new Set([])
    expect(intersection(a, b)).toMatchObject(new Set([]))

    a = new Set([1, 2, 3])
    b = new Set([4, 5, 6])
    expect(intersection(a, b)).toMatchObject(new Set([]))

    a = new Set([1, 2, 3])
    b = new Set([1, 2, 3, 4, 5, 6])
    expect(intersection(a, b)).toMatchObject(new Set([1, 2, 3]))

})
