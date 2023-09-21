class Sensor {
	static Offset() {
	  return 16;
	}
  
	static samplePressure() {
	  const pressureTelemetryValue = Math.floor(6 * Math.random() * Math.random());
	  return pressureTelemetryValue;
	}
  
	popNextPressurePsiValue() {
	  const pressureTelemetryValue = Sensor.samplePressure();
	  return Sensor.Offset() + pressureTelemetryValue;
	}
  }

module.exports = Sensor;
