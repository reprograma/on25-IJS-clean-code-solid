class TurnNumberSequence {
    static #turnNumber = 0;

    static getNextTurnNumber() {
        return TurnNumberSequence.#turnNumber++;
    }
}

module.exports = TurnNumberSequence;