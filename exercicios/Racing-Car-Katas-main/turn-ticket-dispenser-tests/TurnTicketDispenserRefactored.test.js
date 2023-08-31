const TicketDispenserRefactored = require('../turn-ticket-dispenser/TicketDispenserRefactored');

describe('Turn Ticket Dispenser', function() {

	describe('TurnTicketDispenser', function() {
        let dispenser, dispenser2, ticket1, ticket2, ticket3, ticket4;

        beforeEach(() => {
			dispenser = new TicketDispenserRefactored();
            dispenser2 = new TicketDispenserRefactored();
            ticket1 = dispenser.getTurnTicket();
            ticket2 = dispenser.getTurnTicket();
            ticket3 = dispenser.getTurnTicket();
            ticket4 = dispenser2.getTurnTicket();
        })

		it('should generate ticket number 0 to the first customer', function() {
			expect(ticket1.turnNumber).toEqual(0);
		});

        it('should generate consecutive ticket', function() {
            expect(ticket1.turnNumber).toEqual(0);
            expect(ticket2.turnNumber).toEqual(1);
            expect(ticket3.turnNumber).toEqual(2);
        });
    
        it('should not generate the same ticket for two different customers', function() {
            expect(ticket1.turnNumber).not.toEqual(ticket2.turnNumber);
        });
	});
});