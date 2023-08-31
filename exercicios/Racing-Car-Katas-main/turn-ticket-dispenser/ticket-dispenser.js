const TurnNumberSequence = require('./turn-number-sequence.js');
const TurnTicket = require('./turn-ticket.js');

class TicketDispenser {

	getTurnTicket() {
		let newTurnNumber = new TurnNumberSequence.getNextTurnNumber()
		let newTurnTicket = new TurnTicket(newTurnNumber)

		return newTurnTicket
	}
}


module.exports = TicketDispenser;
