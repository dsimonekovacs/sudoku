const getEmptyPuzzle = require('./getEmptyPuzzle');


test('getEmptyPuzzle', () => {
    // Basically just assert the returned puzzle has 9 rows, all of length 9
    let empty = getEmptyPuzzle();
    expect(empty.length).toBe(9);
    for (let i = 0; i < 9; i++) {
        expect(empty[i].length).toBe(9);
        for (let j = 0; j < 9; j++) {
            expect(empty[i][j]).toBe(undefined)
        }
    }
});
