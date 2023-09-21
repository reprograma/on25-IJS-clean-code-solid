var Sensor = require('./sensor.js');

class Alarm {
	constructor() {
	  this._lowPressureThreshold = 17;
	  this._highPressureThreshold = 21;
	  this._sensor = new Sensor();
	  this._alarmOn = false;
	}
  
	check() {
	  const psiPressureValue = this._sensor.popNextPressurePsiValue();
  
	  if (this.isPressureOutOfRange(psiPressureValue)) {
		this._alarmOn = true;
	  }
	}
  
	isPressureOutOfRange(psiPressureValue) {
	  return psiPressureValue < this._lowPressureThreshold || psiPressureValue > this._highPressureThreshold;
	}
  
	alarmOn() {
	  return this._alarmOn;
	}
  }
  

module.exports = Alarm;
