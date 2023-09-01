/* globals describe, it */
var Alarm = require('../tire-pressure-monitoring-system/alarm.js');

describe('Tire Pressure Monitoring System', () =>  {

		beforeEach(() => {
			alarm = new Alarm();
		});

		it('foo', () =>  {
			expect(alarm.alarmOn()).toEqual(false);
		});

		it('verify when the psiPressureValue is lower than lowPressureThreshold', () => {
			alarm.psiPressureValue = 15;
			expect(alarm.check())
			expect(alarm.alarmOn()).toEqual(true);
		})

		it('verify when the psiPressureValue is higher then highPressureThreshold', () => {
			alarm.psiPressureValue = 20;
			expect(alarm.check())
			expect(alarm.alarmOn()).toEqual(false);
		})

});
