var Sensor = require('./sensor.js');


class Alarm {
	#lowPressureThreshold = 17;
	#highPressureThreshold = 21;
	#sensor = new Sensor();
	#alarmOn = false;

	check(){
		var psiPressureValue = this.#sensor.popNextPressurePsiValue();
		if (psiPressureValue < this.#lowPressureThreshold || this.#highPressureThreshold < psiPressureValue) {
			this.#alarmOn = true;
		}
	}

	alarmOn(){
		return this.#alarmOn;
	}
}

module.exports = Alarm;
