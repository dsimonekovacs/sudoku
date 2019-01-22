const getGrid = require('./getGrid')

function getAvailableInGrid(puzzle, rowIndex, columnIndex) {
    let available = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
<<<<<<< HEAD

    let grid = getGrid(puzzle, Math.floor(rowIndex / 3), Math.floor(columnIndex / 3))

    for (let i = 1; i < 10; i++) {
=======
    
    let grid = getGrid(puzzle, Math.floor(rowIndex/3), Math.floor(columnIndex/3))
    
    for (let i = 0; i < 9; i++) {
>>>>>>> Add updates to functions
        available.delete(grid[i]);
    }
    return available;
}

module.exports = getAvailableInGrid
