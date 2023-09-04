const Alarm = require('../tire-pressure-monitoring-system/alarm')

describe('Alarm', () => {
  let alarm;

  beforeEach(() => {
    alarm = new Alarm();
  });

  it('deve iniciar desativado', () => {
    expect(alarm.alarmOn()).toBe(false);
  });

  it('não deve acionar o alarme quando a pressão estiver entre 21 e 17', () => {
 
    alarm._sensor.samplePressure = () => 18; 
    alarm.check();
    expect(alarm.alarmOn()).toBe(false);
  });

  it('deve acionar o alarme quando a pressão estiver abaixo de 17', () => {
    alarm._sensor.samplePressure = () => 15; 
    expect(alarm.alarmOn()).toBe(true);
  });

  it('deve acionar o alarme quando a pressão  acima de 21', () => {
    alarm._sensor.samplePressure = () => 22; 
    alarm.check();
    expect(alarm.alarmOn()).toBe(true);
  });
});
