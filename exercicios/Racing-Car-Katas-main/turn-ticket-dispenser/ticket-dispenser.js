var TurnNumberSequence = require('./turn-number-sequence.js');
var TurnTicket = require('./turn-ticket.js');

TicketDispenser = function() {
};

TicketDispenser.prototype = {

	getTurnTicket: function() {
		var newTurnNumber = TurnNumberSequence.getNextTurnNumber();
		var newTurnTicket = new TurnTicket(newTurnNumber);

		return newTurnTicket;
	}

};

// class TicketDispenser{
// 	turnTicket;

// 	constructor(){
// 		this.turnTicket = 0;
// 	}
// 	turnTicketSequence(){
// 		return ++this.turnTicket;

// 	}
// }
// const ticket = new TicketDispenser();
// console.log(ticket.turnTicketSequence())

module.exports = TicketDispenser;
