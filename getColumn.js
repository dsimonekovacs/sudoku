const getRow = require('./getRow')

function getColumn (puzzle, columnIndex) {
    let columnNums = [];

    for (let i = 0; i < puzzle.length; i++) {
        let row = getRow(puzzle, i);
        let column = row[columnIndex]
        columnNums.push(column);
    }

    return columnNums;
};

module.exports = getColumn;
