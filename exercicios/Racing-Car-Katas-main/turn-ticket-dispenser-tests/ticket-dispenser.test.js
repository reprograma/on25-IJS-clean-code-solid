/* globals describe, it */
// var jest = require('jest');
// jest.should();

const TicketDispenser = require('../turn-ticket-dispenser/ticket-dispenser.js');


describe('Turn Ticket Dispenser', () =>  {

	it('foo', () =>  {
		let dispenser = new TicketDispenser();
		let ticket = dispenser.getTurnTicket();
		expect(ticket.turnNumber()).toEqual(0);
	});


});

