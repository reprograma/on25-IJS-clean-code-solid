
const { beforeEach } = require('node:test');
const TicketDispenser = require('../turn-ticket-dispenser/ticket-dispenser.js');


describe('Turn Ticket Dispenser', () =>  {

	it('test dispenser', () =>  {
		let dispenser = new TicketDispenser();
		let ticket = dispenser.getTurnTicket();
		expect(ticket.turnNumber()).toEqual(0);
	});

	it('test dispenser', () =>  {
		let anotherDispenser = new TicketDispenser();
		let ticket = anotherDispenser.getTurnTicket();
		expect(ticket.turnNumber()).toEqual(1);
	});
	it('test dispenser', () =>  {
		let anotherDispenser1 = new TicketDispenser();
		let ticket = anotherDispenser1.getTurnTicket();
		expect(ticket.turnNumber()).toEqual(2);
	});

});

