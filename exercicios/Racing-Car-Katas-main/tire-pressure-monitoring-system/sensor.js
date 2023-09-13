class Sensor {
	Offset() {
	  return 16;
	}
  
	samplePressure() {
	  let pressureTelemetryValue = Math.floor(6 * Math.random() * Math.random());
	  return pressureTelemetryValue;
	}
  
	popNextPressurePsiValue() {
	  let pressureTelemetryValue = Sensor.samplePressure();
  
	  return this.Offset() + pressureTelemetryValue;
	}
  }
  
  module.exports = { Sensor };