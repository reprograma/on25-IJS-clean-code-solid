
class Sensor {

	 Offset() { 
    return 16; 
  };

	 SamplePressure() {
		let pressureTelemetryValue = Math.floor(6 * Math.random() * Math.random());
		return pressureTelemetryValue;
	};

	 popNextPressurePsiValue() {
		let pressureTelemetryValue = Sensor.SamplePressure();
		return Sensor.Offset() + pressureTelemetryValue;
	}


};



module.exports = Sensor;
