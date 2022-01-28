import BingoCard from '../models/BingoCard.js'
import Bingo from '../models/Bingo.js'

function process(string) {
    const lines = string.split('\n')
    const picks = lines[0].split(',')
    const cards = []

    // start at two to skip the picks that were just pulled off
    // and skip the blank line before the first card.
    let index = 2
    while (index < lines.length) {
        let row1 = lines[index + 0]
        let row2 = lines[index + 1]
        let row3 = lines[index + 2]
        let row4 = lines[index + 3]
        let row5 = lines[index + 4]

        let rows = [row1, row2, row3, row4, row5]
        rows = rows.map(rowString => rowString.trim().split(/ +/))

        // skip over the five lines of this card
        // and the blank line before the next card
        index += 6

        const card = new BingoCard(rows)
        cards.push(card)
    }

    return new Bingo(picks, cards)
}

export default process;