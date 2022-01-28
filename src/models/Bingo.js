class Bingo {
    constructor(picks, cards) {
        this.picks = picks
        this.cards = cards

        this.reset()
    }

    drawNumber() {
        if (this.drawIndex >= this.picks.length) {
            return
        }

        let number = this.picks[this.drawIndex]
        this.drawn.add(number)
        this.drawnOrder.push(number)
        this.drawIndex++
    }

    reset() {
        this.drawn = new Set()
        this.drawnOrder = []
        this.drawIndex = 0
        this.isGameOver = false
        this.wonBoards = new Set()
    }
}

export default Bingo