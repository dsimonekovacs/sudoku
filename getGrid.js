function getGrid (puzzle, x, y) {
    let subgrid = [];
    let startRow = x * 3;
    let startColumn = y * 3;
    
    // grabbing the rows for the subgrid
    let rows = [];
    for (let i = startRow; i < startRow + 3; i++) {
        rows.push(getRow(sudokuGrid, i));
    }

    for (let i = 0; i < 3; i++) {
        let columns = rows[i].slice(startColumn, startColumn + 3);
        subgrid = subgrid.concat(columns)
    }

    return subgrid;
}

module.exports = getGrid;