/* var jest = require('jest');

var Alarm = require('../tire-pressure-monitoring-system/alarm.js');

describe('Tyre Pressure Monitoring System', () => {
	it('check if the alarm works',() => {

		expect.check(psiPressureValue(11)).toBe(true);
	});

});*/

var chai = require('chai');
chai.should();

var Alarm = require('../tire-pressure-monitoring-system/alarm.js');

describe('Tyre Pressure Monitoring System', () => {

	it('check if the alarm works', function() {
		var alarm = new Alarm();
		alarm.alarmOn().should.equal(false);
	});

});