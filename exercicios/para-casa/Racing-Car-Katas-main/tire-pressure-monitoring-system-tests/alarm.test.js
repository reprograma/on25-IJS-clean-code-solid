/* globals describe, it */
const Alarm = require("../tire-pressure-monitoring-system/alarm.js");

describe("Alarm", () => {
  let alarm = new Alarm();

  it("should test the alamrOn()", () => {
    expect(alarm.check());
    expect(alarm.alarmOn()).toBe(false);
  });

  it("should test function check when psiPressureValue is smaller then 6", () => {
    alarm.psiPressureValue = 10;
    expect(alarm.check());
    expect(alarm.alarmOn()).toBe(true);
  });
});
