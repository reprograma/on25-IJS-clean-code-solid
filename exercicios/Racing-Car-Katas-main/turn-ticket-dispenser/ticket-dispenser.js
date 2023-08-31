const turnNumberSequence = require("./turn-number-sequence.js");
const TurnTicket = require("./turn-ticket.js");

class TicketDispenser {
  getTurnTicket() {
    const newTurnNumber = turnNumberSequence();
    const newTurnTicket = new TurnTicket(newTurnNumber);
    return newTurnTicket;
  }
}

module.exports = TicketDispenser;
