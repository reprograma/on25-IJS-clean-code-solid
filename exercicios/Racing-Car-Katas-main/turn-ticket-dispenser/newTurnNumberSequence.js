
class TurnNumberSequence {
	turnNumber= 0;

  constructor(turnNumber) {
    this.turnNumber = turnNumber;
  }
    
  getNextTurnNumber() {
		return TurnNumberSequence.turnNumber++;
	}
};

module.exports = TurnNumberSequence;
