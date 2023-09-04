const Sensor = require('../tire-pressure-monitoring-system/sensor');

describe('Sensor', () => {
  it('should return a valid offset value', () => {
    expect(Sensor.Offset()).toBe(16);
  });

  it('should return a valid pressure value', () => {
    const pressureValue = Sensor.samplePressure();
    expect(pressureValue).toBeGreaterThanOrEqual(0);
    expect(pressureValue).toBeLessThan(6);
  });

  it('should return a valid popNextPressurePsiValue', () => {
    const sensor = new Sensor();
    const pressureValue = sensor.popNextPressurePsiValue();
    expect(pressureValue).toBeGreaterThanOrEqual(16);
    expect(pressureValue).toBeLessThanOrEqual(16 + 6);
  });
});
