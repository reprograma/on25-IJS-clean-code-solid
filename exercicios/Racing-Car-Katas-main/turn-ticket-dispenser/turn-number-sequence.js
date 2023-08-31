class TurnNumberSequence {
	#turnNumber

	constructor(){
		this.#turnNumber = 0
	}

	static getNextTurnNumber(){
		return this.#turnNumber++
	}
}

module.exports = TurnNumberSequence;


