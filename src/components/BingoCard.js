export default function BingoCard(props) {
    function checkWinningRows() {
        let winningRows = new Set()
        for (let irow = 0; irow < 5; irow++) {
            let calledNumbers = 0
            for (let icol = 0; icol < 5; icol++) {
                let number = props.card.grid[irow][icol]
                if (props.drawn.has(number)) {
                    calledNumbers++
                    if (calledNumbers === 5) {
                        winningRows.add(irow)
                    }
                }
            }
        }
        return winningRows
    }

    function checkWinningCols() {
        let winningCols = new Set()
        for (let icol = 0; icol < 5; icol++) {
            let calledNumbers = 0
            for (let irow = 0; irow < 5; irow++) {
                let number = props.card.grid[irow][icol]
                if (props.drawn.has(number)) {
                    calledNumbers++
                    if (calledNumbers === 5) {
                        winningCols.add(icol)
                    }
                }
            }
        }
        return winningCols
    }

    const winningRows = checkWinningRows()
    const winningCols = checkWinningCols()

    let className = "bingo-card"
    if (winningRows.size + winningCols.size > 0) {
        className += " won-board"
    }
    
    let unmarkedSum = 0
    return <div className={className}>
        <div className="card-row">
            <div className="card-cell">B</div>
            <div className="card-cell">I</div>
            <div className="card-cell">N</div>
            <div className="card-cell">G</div>
            <div className="card-cell">O</div>
        </div>

        {props.card.grid.map((row, rowIndex) => {
            return <div className="card-row" key={rowIndex}>
                {row.map((number, colIndex) => {
                    if (!props.drawn.has(number)) {
                        unmarkedSum += parseInt(number, 10)
                    }
                    if (winningRows.has(rowIndex) || winningCols.has(colIndex)) {
                        return <div className="card-cell winner" key={colIndex}>
                            {number}
                        </div>
                    } else if (props.drawn.has(number)) {
                        return <div className="card-cell drawn" key={colIndex}>
                            {number}
                        </div>
                    } else {
                        return <div className="card-cell" key={colIndex}>
                            {number}
                        </div>
                    }
                })}
            </div>
        })}

        <div>sum: {unmarkedSum}</div>
    </div>
}