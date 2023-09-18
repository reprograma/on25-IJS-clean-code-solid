let TicketDispenser = require('../turn-ticket-dispenser/ticket-dispenser.js');
let TurnTicket = require('../turn-ticket-dispenser/turn-ticket.js')


describe('TurnTicketDispenser', () => {

	let dispenser = new TicketDispenser(),
		turnTicket = new TurnTicket(20),
		ticket1 = dispenser.getTurnTicket(),
		ticket2 = dispenser.getTurnTicket(),
		ticket3 = dispenser.getTurnTicket();

	describe('check class TicketDispenser', () => {
		it('should verify when the turnNumber is 0 to the first client', () => {
			expect(ticket1.turnNumber).toBe(0);
		});

		it('should verify a sequence of clients', () => {
			expect(ticket2.turnNumber).toBe(1);
			expect(ticket3.turnNumber).toBe(2);
		});
	})

	describe('check class TurnTicket', () => {
		it('should verify get turnNumber', () => {
			expect(turnTicket.turnNumber).toBe(20);
		});
	})
});