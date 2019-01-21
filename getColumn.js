function getColumn (puzzle, columnIndex) {
    let columnNums = [];

    for (let i = 0; i < sudokuGrid.length; i++) {
        let row = getRow(sudokuGrid, i);
        let column = row[columnIndex]
        columnNums.push(column);
    }

    return columnNums;
};

module.exports = getColumn;
