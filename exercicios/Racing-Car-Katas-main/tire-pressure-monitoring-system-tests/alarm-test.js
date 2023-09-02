const Sensor = require('../tire-pressure-monitoring-system/sensor');
const Alarm = require('../tire-pressure-monitoring-system/alarm');

describe('Alarm', () => {
  let alarm;

  beforeEach(() => {
    alarm = new Alarm();
  });

  it('should turn on the alarm when pressure is too low', () => {
    // Mock 
    alarm._sensor.popNextPressurePsiValue = jest.fn(() => 15);

    alarm.check();

    expect(alarm.alarmOn()).toBe(true);
  });

  it('should turn on the alarm when pressure is too high', () => {
    // Mock 
    alarm._sensor.popNextPressurePsiValue = jest.fn(() => 25);

    alarm.check();

    expect(alarm.alarmOn()).toBe(true);
  });

  it('should not turn on the alarm when pressure is within range', () => {
    // Mock 
    alarm._sensor.popNextPressurePsiValue = jest.fn(() => 18);

    alarm.check();

    expect(alarm.alarmOn()).toBe(false);
  });
});
