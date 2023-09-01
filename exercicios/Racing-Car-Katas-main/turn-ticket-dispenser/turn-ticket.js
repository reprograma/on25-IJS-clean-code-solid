class TurnTicket {
    #turnNumber;

    constructor(turnNumber) {
        this.#turnNumber = turnNumber;
    }
	
    get turnNumber() {
        return this.#turnNumber;
    }
}

module.exports = TurnTicket;
