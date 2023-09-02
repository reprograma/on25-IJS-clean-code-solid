// turn-number-sequence.js
class TurnNumberSequence {
    constructor() {
        this._turnNumber = 0;
    }

    getNextTurnNumber() {
        return this._turnNumber++;
    }
}

const turnNumberSequence = new TurnNumberSequence();
export default turnNumberSequence;

// turn-ticket.js
class TurnTicket {
    constructor(turnNumber) {
        this._turnNumber = turnNumber;
    }

    get turnNumber() {
        return this._turnNumber;
    }
}


// ticket-dispenser.js
import TurnNumberSequence from './turn-number-sequence.js';
import TurnTicket from './turn-ticket.js';

class TicketDispenser {
    getTurnTicket() {
        const newTurnNumber = TurnNumberSequence.getNextTurnNumber();
        const newTurnTicket = new TurnTicket(newTurnNumber);
        return newTurnTicket;
    }
}

