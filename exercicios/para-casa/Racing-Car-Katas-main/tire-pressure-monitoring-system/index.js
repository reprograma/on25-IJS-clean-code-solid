class Sensor {
  offset = 16;

  popNextPressurePsiValue(pressureReading) {
    return this.offset + pressureReading;
  }
}

class Alarm {
  static lowPressureThreshold = 17;
  static highPressureThreshold = 21;
  constructor() {
    this._sensor = new Sensor();
    this._isAlarmOn = false;
  }

  #isDangerous(psiPressureValue) {
    return (
      psiPressureValue < Alarm.lowPressureThreshold ||
      Alarm.highPressureThreshold < psiPressureValue
    );
  }

  check(pressureReading) {
    let psiPressureValue =
      this._sensor.popNextPressurePsiValue(pressureReading);

    if (this.#isDangerous(psiPressureValue)) this._isAlarmOn = true;
  }

  alarmOn() {
    return this._isAlarmOn;
  }
}

const alarm = new Alarm();

const testPressure = () => {
  alarm.check(Number(prompt()));
};

if (typeof module === "object") {
  module.exports = { Alarm };
}
