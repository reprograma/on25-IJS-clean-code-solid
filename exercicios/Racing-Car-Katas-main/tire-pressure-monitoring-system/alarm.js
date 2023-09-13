class Alarm {
	_lowPressureThreshold;
	_highPressureThreshold;
	_sensor;
	_alarmOn;
  
	constructor(
	  _lowPressureThreshold,
	  _highPressureThreshold,
	  _sensor,
	  _alarmOn
	) {
	  this._lowPressureThreshold = _lowPressureThreshold;
	  (this._highPressureThreshold = _highPressureThreshold),
		(this._sensor = _sensor);
	  this._alarmOn = _alarmOn;
	}
  
	check() {
	  let psiPressureValue = this._sensor.popNextPressurePsiValue();
  
	  if (
		psiPressureValue < this._lowPressureThreshold ||
		this._highPressureThreshold < psiPressureValue
	  ) {
		this._alarmOn = true;
	  }
	}
  
	alarmOn() {
	  return this._alarmOn;
	}
  }
  
  module.exports = {Alarm};
