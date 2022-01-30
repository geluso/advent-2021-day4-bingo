import './App.css';

import React, { useState, useEffect } from 'react';

import BingoCard from './components/BingoCard';
import DrawnNumbers from './components/DrawnNumbers';
import SmallData from './data/SmallData';
import BigData from './data/BigData';
import process from './data/ProcessData';

export default function App(props) {
  const [bingo, setBingo] = useState(null)
  const [drawn, setDrawn] = useState([])

  useEffect(() => {
    const bingo = process(BigData)
    setBingo(bingo);
    setDrawn(bingo.drawn)
  }, [])

  function useSmallData() {
    const bingo = process(SmallData)
    setBingo(bingo)
    setDrawn(bingo.drawn)
  }

  function useBigData() {
    const bingo = process(BigData)
    setBingo(bingo)
    setDrawn(bingo.drawn)
  }

  function drawNumber() {
    console.log("drawNumber")
    bingo.drawNumber()
    setDrawn(new Set(bingo.drawn))
  }

  function reset() {
    console.log("reset")
    bingo.reset()
    setDrawn(new Set(bingo.drawn))
  }

  function onBingo(cardIndex) {
    console.log('BINGO!', cardIndex)
    props.bingo.wonBoards.add(cardIndex)
    //setBingo(bingo)
  }

  return <div>
    <div>
      <button onClick={drawNumber}>
        Draw Number
      </button>

      <button onClick={useSmallData}>
        Small Data
      </button>

      <button onClick={useBigData}>
        Big Data
      </button>

      <button onClick={reset}>
        Reset
      </button>
    </div>

    <div>
      <DrawnNumbers drawn={drawn} />
    </div>

    {bingo === null ? "Loading..." : bingo.cards.map((card, index) => {
      return <BingoCard key={index} cardIndex={index} card={card} drawn={drawn} onBingo={onBingo}></BingoCard>
    })}
  </div>
}
