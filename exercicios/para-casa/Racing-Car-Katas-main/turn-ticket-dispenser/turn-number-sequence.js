class TurnNumberSequence {
	#turnNumber;

	constructor() {
		this.#turnNumber = turnNumber;
		return this.#turnNumber;
	}
	static getNextTurnNumber() {
		return this.#turnNumber++;
	}
}

module.exports = TurnNumberSequence;
