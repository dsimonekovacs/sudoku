const getEmptyPuzzle = require('./getEmptyPuzzle');
const setAt = require("./setAt");

test('set 1, 1 to 2', () => {
    let empty = getEmptyPuzzle();
    setAt(empty, 1, 1, 2);
    expect(empty[1][1]).toBe(2)
})

