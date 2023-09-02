var Alarm = require('../tire-pressure-monitoring-system/alarm.js');
var Sensor = require('../tire-pressure-monitoring-system/sensor.js');

describe('Tyre Pressure Monitoring System', function() {
	describe('Alarm', function() {
		let alarm;
		
		beforeEach(function() {
			alarm = new Alarm();
		})

		it('foo', function() {
			expect(alarm.alarmOn()).toEqual(false);
		});

		it('check value lowPressureThreshold', function() {
			expect(alarm._lowPressureThreshold).toBe(17);
		})

		it('check value highPressureThreshold', function() {
			expect(alarm._highPressureThreshold).toBe(21);
		})

		it('check if sensor is an instance of Sensor', function() {
			expect(alarm._sensor instanceof Sensor).toEqual(true);
		})

		it('should turn on the alarm when pressure is too low', () => {
    jest.spyOn(alarm._sensor, 'popNextPressurePsiValue').mockReturnValue(10);
    alarm.check();
    expect(alarm.alarmOn()).toBe(true);
  });

  it('should turn on the alarm when pressure is too high', () => {
    jest.spyOn(alarm._sensor, 'popNextPressurePsiValue').mockReturnValue(25);
    alarm.check();
    expect(alarm.alarmOn()).toBe(true);
  });

  it('should not turn on the alarm when pressure is within the acceptable range', () => {
    jest.spyOn(alarm._sensor, 'popNextPressurePsiValue').mockReturnValue(18);
    alarm.check();
    expect(alarm.alarmOn()).toBe(false);
  });
	});
});
