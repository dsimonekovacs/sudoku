function prettyPrint(grid) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            num = grid[i][j]
            num = num === undefined ? '\033[2;37;31mX\033[0m': num
            process.stdout.write(` ${num} `)
            if (j === 2 || j === 5) {
                process.stdout.write('|')
            }
        }
        if (i === 2 || i === 5) {
            console.log('\n----------------------------')
        }
        else {
            console.log('')
        }
    }
}

module.exports = prettyPrint
