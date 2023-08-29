const TicketDispenser = require("../turn-ticket-dispenser/ticket-dispenser.js");

describe("Check Turn Ticket Dispenser class", () => {
  it("check if the turnNumber increases", () => {
    const dispenser = new TicketDispenser();
    const ticket = dispenser.getTurnTicket();
    const ticket2 = dispenser.getTurnTicket();
    expect(ticket.turnNumber).toBe(1);
    expect(ticket2.turnNumber).toBe(2);
  });
});
