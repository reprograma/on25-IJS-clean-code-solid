const Alarm = require('../tire-pressure-monitoring-system/alarm.js')

describe('Tyre Pressure Monitoring System', function() {
	describe('Alarm', function() {
		it('Alarm off', function() {
			const alarm = new Alarm()
			expect(alarm.alarmOn()).toEqual(false);	
		});

	});

	it('psiPressureValue é menor que lowPressureThreshold', () => {
		let alarm = new Alarm();
		alarm.psiPressureValue = 10
		alarm.check()
		expect(alarm.alarmOn()).toEqual(false)		
	})
});
