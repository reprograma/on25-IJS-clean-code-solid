const Sensor = require('./sensor.js');

class AlarmRefactored{
	constructor(_lowPressureThreshold, _highPressureThreshold, _sensor, _alarmOn){
		this._lowPressureThreshold = _lowPressureThreshold,
		this._highPressureThreshold = _highPressureThreshold,
		this._sensor = _sensor,
		this._alarmOn = _alarmOn
	}

	check(){
		var psiPressureValue = this._sensor.popNextPressurePsiValue();

		if (psiPressureValue < this._lowPressureThreshold || this._highPressureThreshold < psiPressureValue) {
			this._alarmOn = true;
		}
	}

	alarmOn(){
		return this._alarmOn;
	}
}

const sensor = new Sensor();
const alarm = new AlarmRefactored(17, 21, sensor, false);

module.exports = AlarmRefactored;