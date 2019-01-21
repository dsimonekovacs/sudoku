const getRow = require('./getRow')

function getAvailableInRow(puzzle, rowIndex) {
    let available = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    
    let row = getRow(puzzle, rowIndex)
    
    for (let i = 0; i < 9; i++) {
        available.delete(row[i]);
    }
    return available;
}

module.exports = getAvailableInRow