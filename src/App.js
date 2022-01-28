import './App.css';

import React from 'react';

import BingoCard from './components/BingoCard';
import DrawnNumbers from './components/DrawnNumbers';
import SmallData from './data/SmallData';
import BigData from './data/BigData';
import process from './data/ProcessData';

class App extends React.Component {
  constructor(props) {
    super(props)
    let bingo = process(BigData)
    this.state = {
      bingo: bingo
    }

    this.onBingo = this.onBingo.bind(this)
  }

  useSmallData() {
    let bingo = process(SmallData)
    this.setState({bingo: bingo})
  }

  useBigData() {
    let bingo = process(BigData)
    this.setState({bingo: bingo})
  }

  drawNumber() {
    this.state.bingo.drawNumber()
    this.setState({bingo: this.state.bingo})
  }

  reset() {
    this.state.bingo.reset()
    this.setState({bingo: this.state.bingo})
  }

  onBingo(cardIndex) {
    console.log('BINGO!', cardIndex)
    this.state.bingo.wonBoards.add(cardIndex)
  }

  render() {
    return <div>
      <div>
        <DrawnNumbers bingo={this.state.bingo} />
      </div>

      <div>
        <button onClick={() => this.drawNumber()}>
          Draw Number
        </button>

        <button onClick={() => this.useSmallData()}>
          Small Data
        </button>

        <button onClick={() => this.useBigData()}>
          Big Data
        </button>

        <button onClick={() => this.reset()}>
          Reset
        </button>
      </div>

      {this.state.bingo.cards.map((card, index) => {
        return <BingoCard key={index} cardIndex={index} card={card} bingo={this.state.bingo} onBingo={this.onBingo}></BingoCard>
      })}
    </div>
  }
}

export default App;
