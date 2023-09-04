const Sensor = require('./sensor.js');
lowPressureThreshold;
highPressureThreshold;
sensor;
alarmOn;
class Alarm {
  constructor() {
    this._lowPressureThreshold = 17;
    this._highPressureThreshold = 21;
    this._sensor = new Sensor();
    this._alarmOn = false;
  }

  check() {
    const psiPressureValue = this._sensor.popNextPressurePsiValue();

    if (psiPressureValue < this.lowPressureThreshold || this._highPressureThreshold < psiPressureValue) {
      this._alarmOn = true;
    }
  }

  alarmOn() {
    return this._alarmOn;
  }
}

module.exports = Alarm;
