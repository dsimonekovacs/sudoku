
function getRow (sudokuGrid, rowIndex) {
    let rowNums = sudokuGrid[rowIndex]
    return rowNums;
};

function getColumn (sudokuGrid, columnIndex) {
    let columnNums = [];

    for (let i = 0; i < sudokuGrid.length; i++) {
        let row = getRow(sudokuGrid, i);
        let column = row[columnIndex]
        columnNums.push(column);
    }

    return columnNums;
};

function getGrid (sudokuGrid, x, y) {
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

function includes1to9 (numArray) {
    for (let i = 1; i < 10; i++) {
        if (!numArray.includes(i)) {
            return false;
        }
    }
    return true;
}

function checkAllRows(sudokuGrid) {
    for (let i = 0; i < sudokuGrid.length; i++) {
        if (!includes1to9(getRow(sudokuGrid, i))) {
            return false;
        }
    }
    return true;
}

function checkAllColumns(sudokuGrid) {
    for (let i = 0; i < sudokuGrid.length; i++) {
        if (!includes1to9(getColumn(sudokuGrid, i))) {
            return false;
        }
    }
    return true;
}

function checkAllGrids(sudokuGrid) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (!includes1to9(getGrid(sudokuGrid, i, j))) {
                return false;
            }
        }
    }
    return true;
}

function sudokuChecker(sudokuGrid) {
   return checkAllRows(sudokuGrid) 
          && checkAllColumns(sudokuGrid) 
          && checkAllGrids(sudokuGrid)
   }

// bonus: if puzzles are equal

function equalArrays (array1, array2) {
    if (array1.length !== array2.length) {
        return false
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}

function comparePuzzles (puzzle1, puzzle2) {
    for (let i = 0; i < 9; i++) {
        if (!equalArrays(puzzle1[i], puzzle2[i])) {
            return false;
        }
    }
    return true;
}