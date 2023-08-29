let Sensor = require("./sensor.js");

class Alarm {
  #lowPressureThreshold;
  #highPressureThreshold;
  #sensor;
  #isAlarmOn;
  constructor() {
    this.#lowPressureThreshold = 17;
    this.#highPressureThreshold = 21;
    this.#sensor = new Sensor();
    this.#isAlarmOn = false;
  }

  check() {
    let psiPressureValue = this.#sensor.popNextPressurePsiValue();
    this.#isAlarmOn =
      psiPressureValue < this.#lowPressureThreshold ||
      psiPressureValue > this.#highPressureThreshold;
  }

  alarmOn() {
    return this.#isAlarmOn;
  }
}

module.exports = Alarm;

let alarm = new Alarm();
alarm.check();
console.log(alarm.alarmOn());
