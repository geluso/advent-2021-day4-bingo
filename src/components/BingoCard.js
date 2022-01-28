import React from 'react';

class BingoCard extends React.Component {
    checkWinningRow() {
        for (let irow = 0; irow < 5; irow++) {
            let rowNumbers = new Set()
            for (let icol = 0; icol < 5; icol++) {
                let number = this.props.card.grid[irow][icol]
                if (this.props.bingo.drawn.has(number)) {
                    rowNumbers.add(number)
                    if (rowNumbers.size === 5) {
                        if (!this.props.bingo.isGameOver) {
                            this.props.onBingo(this.props.cardIndex)
                        }
                        return irow
                    }
                }
            }
        }
    }

    checkWinningCol() {
        for (let icol = 0; icol < 5; icol++) {
            let colNumbers = new Set()
            for (let irow = 0; irow < 5; irow++) {
                let number = this.props.card.grid[irow][icol]
                if (this.props.bingo.drawn.has(number)) {
                    colNumbers.add(number)
                    if (colNumbers.size === 5) {
                        if (!this.props.bingo.isGameOver) {
                            this.props.onBingo(this.props.cardIndex)
                        }
                        return icol
                    }
                }
            }
        }
    }

    render() {
        const winningRow = this.checkWinningRow()
        const winningCol = this.checkWinningCol()

        let className = "bingo-card"
        if (this.props.bingo.wonBoards.has(this.props.cardIndex)) {
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

            {this.props.card.grid.map((row, rowIndex) => {
                return <div className="card-row" key={rowIndex}>
                    {row.map((number, colIndex) => {
                        if (!this.props.bingo.drawn.has(number)) {
                            unmarkedSum += parseInt(number, 10)
                        }
                        if (rowIndex === winningRow || colIndex === winningCol) {
                            return <div className="card-cell winner" key={colIndex}>
                                {number}
                            </div>
                        } else if (this.props.bingo.drawn.has(number)) {
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
}

export default BingoCard;