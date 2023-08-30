const AlarmRefactored = require('../tire-pressure-monitoring-system/AlarmRefactored');
const SensorRefactored = require('../tire-pressure-monitoring-system/SensorRefactored');

describe('Tyre Pressure Monitoring System', function() {
	let alarm, sensor;

	beforeEach(() => {
		sensor = new SensorRefactored();
		alarm = new AlarmRefactored(17, 21, sensor, false);
	})
	
	describe('Alarm', function() {
		it('foo', function() {
			expect(alarm.alarmOn()).toBe(false);
		});

		it('should trigger alarm when pressure is below the low threshold', function() {
			alarm._sensor.popNextPressurePsiValue = () => 15
			alarm.check();
			expect(alarm.alarmOn()).toBe(true);
		});

		it('should trigger alarm when pressure is above the high threshold', function() {
			alarm._sensor.popNextPressurePsiValue = () => 23;
			alarm.check();
			expect(alarm.alarmOn()).toBe(true);
		});

		it('should not trigger alarm when pressure is within the normal range', function() {
			alarm._sensor.popNextPressurePsiValue = () => 19;
			alarm.check();
			expect(alarm.alarmOn()).toBe(false);
		});

	});
});
