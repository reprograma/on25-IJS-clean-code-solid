class TurnTicketRefactored{
    _turnNumber;
    
    constructor(turnNumber){
        this._turnNumber = turnNumber
    };

    get turnNumber(){
        return this._turnNumber;
    }
}

module.exports = TurnTicketRefactored;