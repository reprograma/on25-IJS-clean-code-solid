export class Sensor {

	 offset() {
		return 16;
	 }

	 samplePressure() {
		let pressureTelemetryValue = Math.floor(6 * Math.random() * Math.random());
		return pressureTelemetryValue;
	 }

	 popNextPressurePsiValue() {
		let pressureTelemetryValue = this.samplePressure();

		return this.offset() + pressureTelemetryValue;
	 }
}

