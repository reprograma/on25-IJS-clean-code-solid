class Sensor {
  static Offset() {
    return 16;
  }

  static samplePressure() {
    // Implementação de espaço reservado que simula um sensor real em um pneu real
    const pressureTelemetryValue = Math.floor(6 * Math.random() * Math.random());
    return pressureTelemetryValue;
  }

  popNextPressurePsiValue() {
    const pressureTelemetryValue = Sensor.samplePressure();
    return Sensor.Offset() + pressureTelemetryValue;
  }
}

module.exports = Sensor;

