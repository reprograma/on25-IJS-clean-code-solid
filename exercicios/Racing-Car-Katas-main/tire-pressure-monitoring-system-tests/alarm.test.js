/* globals describe, it */
var jest = require('jest');

const Alarm = require('../tire-pressure-monitoring-system/alarm.js');
const Sensor = require('../tire-pressure-monitoring-system/sensor.js')

describe('Alarm', () => {
	let alarm;
	beforeEach(() => {
		alarm = new Alarm();
	})

	it('Should return true when psiPressureValue is less than lowPressureThreshold', () => {
		let alarm = new Alarm();
		alarm.psiPressureValue = 15;
		expect(alarm.check())
		expect(alarm.alarmOn()).toEqual(true);
	})

});


