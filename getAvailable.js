const getAvailableInRow = require('./getAvailableInRow');
const getAvailableInColumn = require('./getAvailableInColumn');
const getAvailableInGrid = require('./getAvailableInGrid');
const intersection = require('./intersection');

function getAvailable(puzzle, rowIndex, columnIndex) {
    row = getAvailableInRow(puzzle, rowIndex);
    column = getAvailableInColumn(puzzle, columnIndex);
    grid = getAvailableInGrid(puzzle, rowIndex, columnIndex);

    available = row;
    available = intersection(available, column);
    available = intersection(available, grid);

    return Array.from(available);
}
module.exports = getAvailable;