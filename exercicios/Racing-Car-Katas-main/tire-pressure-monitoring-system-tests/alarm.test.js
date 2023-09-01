
const {Alarm} = require("../tire-pressure-monitoring-system/newAlarm.js");
const {Sensor} = require("../tire-pressure-monitoring-system/newSensor.js")


describe('Alarme', () => {
	
	it("verifica se alarme inicia desligado", () => {
		let alarm = new Alarm();
		expect(alarm.alarmOn()).toBe(false);
	});	

});





 
//  let alarm = new Alarm();
//  alarm.psiPressureValue = 15;
//  expect(alarm.check(22))
//  expect(alarm.alarmOn(22)).toEqual(true);








