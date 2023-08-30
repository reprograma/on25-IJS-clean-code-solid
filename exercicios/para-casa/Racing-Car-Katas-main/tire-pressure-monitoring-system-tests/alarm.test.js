/* globals describe, it */
const { expect, test, beforeEach } = require("@jest/globals");

const { Alarm } = require("../tire-pressure-monitoring-system/index");

describe("Tyre Pressure Monitoring System", () => {
  describe("check function in Alarm", () => {
    let alarm;

    beforeEach(() => {
      alarm = new Alarm();
    });

    it("alarmOn should return false", function () {
      expect(alarm.alarmOn()).toBe(false);
    });

    it("should verify when the psiPressureValue is within the lowPressureThreshold and highPressureThreshold", () => {
      alarm.check(5);
      expect(alarm.alarmOn()).toBe(false);
    });

    it("should verify when the psiPressureValue is higher then highPressureThreshold", () => {
      alarm.check(16);
      expect(alarm.alarmOn()).toBe(true);
    });

    it("should verify when the psiPressureValue is lower then lowPressureThreshold", () => {
      alarm.check(0);
      expect(alarm.alarmOn()).toBe(true);
    });
  });
});
