var Sensor = require('./sensor.js');

class Alarm {
    constructor() {
        this._lowPressureThreshold = 17;
        this._highPressureThreshold = 21;
        this._sensor = new Sensor();
        this._alarmOn = false;
    }

    check() {
        const psiPressureValue = this._sensor.popNextPressurePsiValue();

        if (this.isPressureOutOfRange(psiPressureValue)) {
            this.turnOnAlarm();
        }
    }

    isPressureOutOfRange(psiPressureValue) {
        return psiPressureValue < this._lowPressureThreshold || psiPressureValue > this._highPressureThreshold;
    }

    turnOnAlarm() {
        this._alarmOn = true;
    }

    alarmOn() {
        return this._alarmOn;
    }
};

const alarm = new Alarm()


module.exports = Alarm;
