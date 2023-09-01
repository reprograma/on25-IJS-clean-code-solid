/* globals describe, it */
const Sensor = require('../tire-pressure-monitoring-system/sensor');
const Alarm = require('../tire-pressure-monitoring-system/alarm')

jest.mock('../tire-pressure-monitoring-system/sensor');  // Mock a classe Sensor

describe('Alarm', () => {
    test('alarm turns on when pressure is below lowPressureThreshold', () => {
        Sensor.prototype.popNextPressurePsiValue = jest.fn(() => 16);  // Mock sensor value
        
        const alarm = new Alarm();
        alarm.check();

        expect(alarm.alarmOn()).toBe(true);
    });

    test('alarm turns on when pressure is above highPressureThreshold', () => {
        Sensor.prototype.popNextPressurePsiValue = jest.fn(() => 22);  // Mock sensor value
        
        const alarm = new Alarm();
        alarm.check();

        expect(alarm.alarmOn()).toBe(true);
    });

    test('alarm stays off when pressure is within thresholds', () => {
        Sensor.prototype.popNextPressurePsiValue = jest.fn(() => 18);  // Mock sensor value
        
        const alarm = new Alarm();
        alarm.check();

        expect(alarm.alarmOn()).toBe(false);
    });
});

//teste da Professora
/*check: function() {
  var psiPressureValue = this._sensor.popNextPressurePsiValue();

  if (psiPressureValue < this._lowPressureThreshold || this._highPressureThreshold < psiPressureValue) {
   this._alarmOn = true;
  }
 },*/