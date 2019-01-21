function getAvailableInRow(puzzle, rowIndex) {
    let available = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    
    for (let i = 0; i < 9; i++) {
        available.delete(puzzle[rowIndex][i]);
    }
    return Array.from(available);
}

// checking available numbers against the row