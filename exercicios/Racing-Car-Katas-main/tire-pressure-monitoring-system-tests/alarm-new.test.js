const { Alarm } = require("../tire-pressure-monitoring-system/AlarmClass");
const { Sensor } = require("../tire-pressure-monitoring-system/SensorClass");

describe("Tyre Pressure Monitoring System", () => {
  let alarm1, sensor1;
  beforeEach(() => {
    sensor1 = new Sensor();
    alarm1 = new Alarm(18, 21, sensor1, false);
  });
  it("should trigger alarm when pressure is below the low threshold", () => {
    alarm1._sensor.popNextPressurePsiValue = () => 15;
    alarm1.check();
    expect(alarm1.alarmOn()).toBeTruthy();
  });

  it("function alarmOn should return false", () => {
    expect(alarm1.alarmOn()).toBeFalsy();
  });
});
