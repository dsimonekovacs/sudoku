const getGrid = require('./getGrid')

function getAvailableInGrid(puzzle, x, y) {
    let available = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    
    let grid = getGrid(puzzle, x, y)
    
    for (let i = 1; i < 10; i++) {
        available.delete(grid[i]);
    }
    return Array.from(available);
}

module.exports = getAvailableInGrid