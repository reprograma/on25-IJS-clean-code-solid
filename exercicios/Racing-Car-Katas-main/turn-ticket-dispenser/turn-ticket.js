TurnTicket = function(turnNumber) {
	this.turnNumber = turnNumber;
};

TurnTicket.prototype = {
	turnNumber: function() {
		return this.turnNumber;
	}
};

module.exports = TurnTicket;
