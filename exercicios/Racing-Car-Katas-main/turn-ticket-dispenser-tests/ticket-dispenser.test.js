/* globals describe, it */
let jest = require('jest');
jest.should();

let TicketDispenser = require('../turn-ticket-dispenser/ticket-dispenser.js');

describe('Turn Ticket Dispenser', function() {

	describe('TurnTicketDispenser', function() {

		it('foo', function() {
			let dispenser = new TicketDispenser();
			let ticket = dispenser.getTurnTicket();
			ticket.turnNumber().should.equal(-1);
		});

	});

});
