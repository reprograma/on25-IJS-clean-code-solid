/* globals describe, it */
// let jest = require('jest');
// jest.should();

const TicketDispenser = require('../turn-ticket-dispenser/newTicketDispenser.js');
const TurnTicket = require("../turn-ticket-dispenser/newTurnTicket.js");
const TurnNumberSequence = require("../turn-ticket-dispenser/newTurnNumberSequence.js");

describe('Turn Ticket Dispenser', () => {

	describe('TurnTicketDispenser', () => {

		it('Conferir se cada ticket vendido, diminui a quantidade restante', () => {
			let dispenser = new TicketDispenser();
			let ticket = dispenser.getTurnTicket();
			expect(ticket.turnNumber()).should.toEqual(-1);
		});

	});

});
