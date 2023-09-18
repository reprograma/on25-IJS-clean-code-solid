let Alarm = require('../tire-pressure-monitoring-system/alarm.js');

describe('check class Alarm', () => {

	let alarm;

	beforeEach(() => {
		alarm = new Alarm();
	})

	it('should verify alarmOn function', () => {
		expect(alarm.alarmOn()).toBe(false);
	});

	it('should verify when the psiPressureValue is lower then lowPressureThreshold', () => {
		alarm.psiPressureValue = 15;
		alarm.check();
		expect(alarm.alarmOn()).toBe(true);
	})

	it('should verify when the psiPressureValue is higher then highPressureThreshold', () => {
		alarm.psiPressureValue = 25;
		alarm.check();
		expect(alarm.alarmOn()).toBe(true);
	})

	it('should verify when the psiPressureValue does not attend the validation', () => {
		alarm.psiPressureValue = 18;
		alarm.check();
		expect(alarm.alarmOn()).toBe(false);
	})

});