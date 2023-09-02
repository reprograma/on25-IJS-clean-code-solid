class TurnTicket {
	#turnNumber;

	constructor(turnNumber) {
		this.#turnNumber = turnNumber;
		return this.#turnNumber;
	}
	get turnNumber() {
		return this.#turnNumber;
	}
}

module.exports = TurnTicket;
