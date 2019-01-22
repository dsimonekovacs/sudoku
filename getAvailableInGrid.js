const getGrid = require('./getGrid')

function getAvailableInGrid(puzzle, rowIndex, columnIndex) {
    let available = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    
    let grid = getGrid(puzzle, Math.floor(rowIndex/3), Math.floor(columnIndex/3))
    
    for (let i = 0; i < 9; i++) {
        available.delete(grid[i]);
    }
    return available;
}

module.exports = getAvailableInGrid
