class Sensor{
	static Offset(){
		return 16;
	}

	static samplePressure(){
		let pressureTelemetryValue = Math.floor(6 * Math.random() * Math.random());
		return pressureTelemetryValue;
	}

	popNextPressurePsiValue(){
		let pressureTelemetryValue = Sensor.samplePressure();
		return Sensor.Offset() + pressureTelemetryValue;
	}

}

module.exports = Sensor;