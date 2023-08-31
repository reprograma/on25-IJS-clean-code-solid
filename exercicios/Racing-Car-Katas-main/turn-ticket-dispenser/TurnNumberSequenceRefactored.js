class TurnNumberSequenceRefactored{
	static _turnNumber = 0;

	static getNextTurnNumber(){
		return TurnNumberSequenceRefactored._turnNumber++;
	}
};

module.exports = TurnNumberSequenceRefactored;