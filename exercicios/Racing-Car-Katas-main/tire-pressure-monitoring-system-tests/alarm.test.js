/* globals describe, it */

const Alarm = require('../tire-pressure-monitoring-system/alarm.js');
const Sensor = require('../tire-pressure-monitoring-system/sensor.js')


describe('Tyre Pressure Monitoring System Alarm', () => {
	it('Should correctly return a turned off alarm', () => {
		const alarm = new Alarm();
		expect(alarm.alarmOn()).toEqual(false);
	});

	it('Should turn on the alarm if the tire pressure is below or above the pressure threshold', () => {
		const alarm = new Alarm();
		alarm.isPressureOutOfRange(16)
		alarm.check()
		expect(alarm.alarmOn()).toEqual(true)

	});

})

