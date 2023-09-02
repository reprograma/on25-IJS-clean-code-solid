class Alarm {
    constructor(sensor) {
      this._lowPressureThreshold = 17;
      this._highPressureThreshold = 21;
      this._sensor = sensor;
      this._alarmOn = false;
    }
  
    check() {
      const psiPressureValue = this._sensor.popNextPressurePsiValue();
  
      if (psiPressureValue < this._lowPressureThreshold || this._highPressureThreshold < psiPressureValue) {
        this._alarmOn = true;
      }
    }
  
    alarmOn() {
      return this._alarmOn;
    }
  }

  class Sensor {
    static Offset() {
      return 16;
    }
  
    static samplePressure() {
      // Placeholder implementation that simulates a real sensor in a tire
      const pressureTelemetryValue = Math.floor(6 * Math.random() * Math.random());
      return pressureTelemetryValue;
    }
  
    popNextPressurePsiValue() {
      const pressureTelemetryValue = Sensor.samplePressure();
      return Sensor.Offset() + pressureTelemetryValue;
    }
  }
  
  const chai = require('chai');
  const should = chai.should();
  
  describe('Tyre Pressure Monitoring System', function () {
    describe('Alarm', function () {
      it('should not trigger an alarm initially', function () {
        const sensorMock = {
          popNextPressurePsiValue: () => 18, // Set a fixed value for testing
        };
  
        const alarm = new Alarm(sensorMock);
        alarm.check();
        alarm.alarmOn().should.equal(false);
      });
  
      it('should trigger an alarm when pressure is too low', function () {
        const sensorMock = {
          popNextPressurePsiValue: () => 15, // Simulate low pressure
        };
  
        const alarm = new Alarm(sensorMock);
        alarm.check();
        alarm.alarmOn().should.equal(true);
      });
  
      it('should trigger an alarm when pressure is too high', function () {
        const sensorMock = {
          popNextPressurePsiValue: () => 22, // Simulate high pressure
        };
  
        const alarm = new Alarm(sensorMock);
        alarm.check();
        alarm.alarmOn().should.equal(true);
      });
    });
  });
  