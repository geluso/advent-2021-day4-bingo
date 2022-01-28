import React from 'react';

class DrawnNumbers extends React.Component {
    render() {
        if (this.props.bingo.drawnOrder.length === 0) {
            return <div className="drawn-numbers">None</div>
        }
        return <div className="drawn-numbers">
            {this.props.bingo.drawnOrder.join(', ')}
        </div>
    }
}

export default DrawnNumbers;