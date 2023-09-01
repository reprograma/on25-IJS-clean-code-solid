const TurnTicketRefactored = require('./TurnTicketRefactored.js');
const TurnNumberSequenceRefactored = require('./TurnNumberSequenceRefactored.js');

class TicketDispenserRefactored{
    getTurnTicket(){
        let newTurnNumber, newTurnTicket;
        newTurnNumber = TurnNumberSequenceRefactored.getNextTurnNumber();
		newTurnTicket = new TurnTicketRefactored(newTurnNumber);

		return newTurnTicket;
    }
}

module.exports = TicketDispenserRefactored;