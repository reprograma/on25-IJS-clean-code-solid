const TurnNumberSequence = require('./turn-number-sequence.js');
const TurnTicket = require('./turnTicket.js');

class TicketDispenser {

  getTurnTicket() {
    let newTurnNumber = TurnNumberSequence.getNextTurnNumber();
    let newTurnTicket = new TurnTicket(newTurnNumber);
    return newTurnTicket;
  }


};




module.exports = TicketDispenser;
