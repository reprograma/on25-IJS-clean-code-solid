let Sensor = require('./sensor.js');

class Alarm {
	constructor(){
		this._lowPressureThreshold = 17;
		this._highPressureThreshold = 21;
		this._sensor = new Sensor();
		this._alarmOn = false;
	}

	check() {
		let psiPressureValue = this._sensor.popNextPressurePsiValue();

		if (psiPressureValue < this._lowPressureThreshold || this._highPressureThreshold < psiPressureValue) {
			this._alarmOn = true;
		}
	}

	alarmOn( ){ 
		return this._alarmOn
	}
	
}

module.exports = Alarm;
