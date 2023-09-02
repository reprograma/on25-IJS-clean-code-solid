/* globals describe, it */

var Alarm = require('../tire-pressure-monitoring-system/alarm.js');

describe("Tyre Pressure Monitoring System", () => {

	describe("Alarm", () => {

		it("should return", () => {
			var alarm = new Alarm();
			expect(alarm.alarmOn()).toBe(false);
		});

	});

});
