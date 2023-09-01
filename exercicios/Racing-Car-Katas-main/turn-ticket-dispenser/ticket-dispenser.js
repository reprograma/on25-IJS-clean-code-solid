var TurnNumberSequence = require('./turn-number-sequence.js');
var TurnTicket = require('./turn-ticket.js');

class TicketDispenser {
	constructor()

	getTurnTicket(){
		var newTurnNumber = TurnNumberSequence.getNextTurnNumber(),
		newTurnTicket = new TurnTicket(newTurnNumber);

		return newTurnTicket;
	}
}


module.exports = TicketDispenser;
