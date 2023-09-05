import { Sensor } from "./sensor.js";

export class Alarm {

	constructor() {
		this.lowPressureThreshold = 17;
		this.highPressureThreshold = 21;
		this.sensor = new Sensor();
		this.alarmOn = false;
	}

	check() {
		let psiPressureValue = this.sensor.popNextPressurePsiValue();

		if (psiPressureValue < this.lowPressureThreshold || 
			this.highPressureThreshold < psiPressureValue
			) {
			this.alarmOn = true;
		}
	}

	get alarmOn() {
		return this.alarmOn;
	}
}
