// The reading of the pressure value from the sensor is simulated in this implementation.
// Because the focus of the exercise is on the other class.

class Sensor {

	Offset(){ 
		return 16; 
	}

	samplePressure() {		
		let pressureTelemetryValue = Math.floor(6 * Math.random() * Math.random());
		return pressureTelemetryValue;
	}

	popNextPressurePsiValue() {
		let pressureTelemetryValue = Sensor.samplePressure();
		return Sensor.Offset() + pressureTelemetryValue;
	}
}

module.exports = Sensor;
