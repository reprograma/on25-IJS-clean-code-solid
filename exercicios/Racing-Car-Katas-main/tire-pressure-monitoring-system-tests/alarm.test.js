const Alarm = require('../tire-pressure-monitoring-system/alarm');
const Sensor = require('../tire-pressure-monitoring-system/sensor');

describe('Alarm', () => {
	let alarm;
  
	beforeEach(() => {
	  alarm = new Alarm();
	});
  
	it('deve iniciar com o alarme desligado', () => {
	  expect(alarm.alarmOn()).toBe(false);
	});
  
	it('deve ligar o alarme quando a pressão estiver abaixo do limite inferior', () => {
	  const mockSamplePressure = jest.spyOn(Sensor, 'samplePressure').mockReturnValue(16);
	  alarm.check();
	  expect(alarm.alarmOn()).toBe(true);
	  mockSamplePressure.mockRestore(); 
	});
  
	it('não deve ligar o alarme quando a pressão estiver dentro dos limites', () => {
	  const mockSamplePressure = jest.spyOn(Sensor, 'samplePressure').mockReturnValue(18);
	  alarm.check();
	  expect(alarm.alarmOn()).toBe(false);
	  mockSamplePressure.mockRestore();
	});
  });

