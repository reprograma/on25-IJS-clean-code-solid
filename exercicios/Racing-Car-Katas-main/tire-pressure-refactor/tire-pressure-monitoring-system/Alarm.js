class Alarm {
  lowPressureThreshold;
  highPressureThreshold;
  sensor;
  alarmOn;

  constructor(sensor) {
    this.lowPressureThreshold = 17;
    this.highPressureThreshold = 21;
    this.sensor = sensor;
    this.alarmOn = false;
  }

  popNextPressurePsiValue() {
    if (this.sensor) {
      const pressureTelemetryValue =
        Math.floor(6 * Math.random()
         * Math.random(this.sensor)
        ) +
        this.sensor;
      console.log(pressureTelemetryValue);
      console.log(this.sensor);
      return pressureTelemetryValue;
    }
  }

  check() {
    const x = this.popNextPressurePsiValue();
    if (x < this.lowPressureThreshold || this.highPressureThreshold < x) {
      console.log(
        `Sensor está apontando ${this.sensor} ${x} e baixa pressão ${this.lowPressureThreshold} e alta pressão ${this.highPressureThreshold}`
      );
      console.log(`Alerting now ${this.alarmOn}`);
      this.alarmOn = true;
    } else {
      console.log(`Alerting desligado ${this.alarmOn}`);
      this.alarmOn = false;
    }
  }

  alert() {
    console.log(`Alerting ${this.alarmOn}`);
    this.alarmOn;
  }
}

module.exports = { Alarm };
