const getEmptyPuzzle = require("./getEmptyPuzzle");
const getAvailableInRow = require('./getAvailableInRow');


test('on empty grid returns [1, 9]', () => {
    emptyPuzzle = getEmptyPuzzle();
    oneThroughNine =[1, 2, 3, 4, 5, 6, 7, 8, 9]
    // Essentially make sure that [1, 9] is returned for each row
    for (let i = 0; i < 9; i++) {
        expect(getAvailableInRow(emptyPuzzle, i)).toMatchObject(new Set(oneThroughNine))
    }
});

test('on non-empty grid', () => {
    let puzzle = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [undefined, 2, undefined, 4, 5, 6, undefined, 8, 9],
    ]
    expect(getAvailableInRow(puzzle, 0)).toMatchObject(new Set([]));
    expect(getAvailableInRow(puzzle, 1)).toMatchObject(new Set([1, 3, 7]));
});
