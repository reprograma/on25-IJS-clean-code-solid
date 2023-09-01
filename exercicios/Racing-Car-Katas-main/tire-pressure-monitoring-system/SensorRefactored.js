class SensorRefactored {
	Offset(){
		return 16;
	}

	samplePressure(){
		var pressureTelemetryValue = Math.floor(6 * Math.random() * Math.random());
		return pressureTelemetryValue;
	}

	popNextPressurePsiValue(){
		var pressureTelemetryValue = Sensor.samplePressure();

		return Sensor.Offset() + pressureTelemetryValue;
	}
}

module.exports = SensorRefactored;