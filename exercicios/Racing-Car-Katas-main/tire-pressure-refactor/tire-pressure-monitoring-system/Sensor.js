class Sensor {
  INITIAL_VALUE = 16;

  // samplePressure(){
  // 	// placeholder implementation that simulate a real sensor in a real tire
  // 	const pressureTelemetryValue = Math.floor(6 * Math.random() * Math.random());
  // 	return pressureTelemetryValue;
  // };

  popNextPressurePsiValue(sensor) {
    if (sensor) {
      const pressureTelemetryValue = Math.floor(
        6 * Math.random(sensor) * Math.random(sensor)
      );
      return pressureTelemetryValue;
    }
  }
}

module.exports = { Sensor };
