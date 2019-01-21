function getEmptyPuzzle () {
    let puzzle = [];

    for (let i = 0; i < 9; i++) {
        puzzle[i] = new Array(9)
    }
    return puzzle;
}

module.exports = getEmptyPuzzle
