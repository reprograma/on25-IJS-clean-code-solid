/* globals describe, it */
const { expect, test, beforeEach } = require("@jest/globals");

const Alarm = require("../tire-pressure-monitoring-system/alarm.js");

describe("Tyre Pressure Monitoring System", () => {
  describe("check function in Alarm", () => {
    let alarm;

    beforeEach(() => {
      alarm = new Alarm();
    });

    it("alarmOn should return false", function () {
      expect(alarm.alarmOn()).toBe(false);
    });

    it("should verify when the psiPressureValue is higher then highPressureThreshold", () => {
      alarm.check();
      expect(alarm.alarmOn()).toBe(true);
    });
  });
});
