const chooseRandomly = require('./chooseRandomly');
const getAvailable = require('./getAvailable');
const getEmptyPuzzle = require('./getEmptyPuzzle');
const setAt = require('./setAt');

function generatePuzzle() {
    let puzzle = getEmptyPuzzle(); // emptyPuzzle returns a 9x9 grid of nulls
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let available = getAvailable(puzzle, i, j); //return array of available nums for cell
            let randomNum = chooseRandomly(available);
            setAt(puzzle, i, j, randomNum);
        }
    }
    return puzzle;
}

module.exports = generatePuzzle
