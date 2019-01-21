chooseRandomly = require('./chooseRandomly');
getAvailable = require('./getAvailable');
getEmptyPuzzle = require('./getEmptyPuzzle');

function generatePuzzle() {
    let puzzle = getEmptyPuzzle(); // emptyPuzzle returns a 9x9 grid of nulls
    for (let i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            let available = getAvailable(puzzle, i, j); //return array of available nums for cell
            let randomNum = chooseRandomly(available);
            setAt(puzzle, i, j, randomNum)
        }
    }
    return puzzle;
}

module.exports = generatePuzzle