/* A classe Alarme foi projetada para monitorar a pressão dos pneus e 
definir um alarme se a pressão cair fora da faixa esperada. */

const Sensor = require('./sensor.js');

class Alarm {
	constructor() {
		this._lowPressureLimit = 17;
		this._highPressureLimit = 21;
		this._sensor = new Sensor();
		this._alarmOn = false;
	}

	check() {
		let psiPressureValue = this._sensor.popNextPressurePsiValue();
		if(psiPressureValue < this._lowPressureLimit || this._highPressureLimit < psiPressureValue) {
			this._alarmOn = true;
		}
	}

	alarmOn() {
		return this._alarmOn;
	}
}


module.exports = Alarm;
