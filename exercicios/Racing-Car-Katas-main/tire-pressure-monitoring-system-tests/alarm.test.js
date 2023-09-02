const Alarm = require("../tire-pressure-monitoring-system/alarm")

describe('Alarm', () => {
	var alarm = new Alarm();

	it('should test the alarmOn()', () => {
		expect(alarm.alarmOn()).toBe(false);
	});

	it('should test the check()', () => {
		result = alarm.check()
		console.log(result)
		if (result < alarm._lowPressureThreshold || result._highPressureThreshold < result) {
			expect(alarm.alarmOn()).toBe(true);
		} else {
			expect(alarm.alarmOn()).toBe(false);
		}
	});
})
