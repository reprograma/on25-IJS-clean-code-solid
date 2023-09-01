/* globals describe, it */
var jest = require('chai');
jest.should();

var Alarm = require('../tire-pressure-monitoring-system/alarm.js');
var Sensor = require('../tire-pressure-monitoring-system/sensor.js');

describe('Tyre Pressure Monitoring System', () => {

	describe('Alarm', () => {

		it('should test the alarm', () =>  {
			var alarm = new Alarm();
			expect(alarm.alarmOn()).toEqual(false);
		});

		it('should return true when psiPressureValue is smaller than lowPressureThreshold', () =>  {
			var alarm = new Alarm();
			alarm.psiPressureValue = 15;
			alarm.check();

			expect(alarm.alarmOn()).toEqual(true);
		});

	});

});
