const getColumn = require('./getColumn')

function getAvailableInColumn(puzzle, columnIndex) {
    let available = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    
    let column = getColumn(puzzle, columnIndex);

    for (let i = 0; i < 9; i++) {
        available.delete(column[i]);  
    }
    return available;
}

module.exports = getAvailableInColumn;