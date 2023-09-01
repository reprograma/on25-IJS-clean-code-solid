let TurnNumberSequence = require('./turn-number-sequence.js');
let TurnTicket = require('./turn-ticket.js');

class TicketDispenser {
    getTurnTicket() {
        let newTurnNumber = TurnNumberSequence.getNextTurnNumber();
        let newTurnTicket = new TurnTicket(newTurnNumber);
        return newTurnTicket;
    }
}

module.exports = TicketDispenser;
