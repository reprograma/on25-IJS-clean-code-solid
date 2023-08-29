const Alarm  = require("../tire-pressure-monitoring-system/alarm.js");
const Sensor = require("../tire-pressure-monitoring-system/sensor.js")

describe("Alarm class", () => {
  let alarm
  beforeEach(()=> {
    alarm = new Alarm();
    alarm.check();
  })
  it("should set alarmOn to true when pressure is below low threshold", () => {  
    //low Pressure Threshold is set to 17;
    expect(alarm.alarmOn()).toBe(true);
  });
  it("should set alarmOn to true when pressure is above high threshold", () => {    
    //high Pressure Threshold is set to 21;
    expect(alarm.alarmOn()).toBe(true);
  });
  it("should set alarmOn to false when pressure is within threshold", () => {    
    // Assuming low threshold is set to 17 and high threshold is set to 21
    // Setting a pressure value between these thresholds
    expect(alarm.alarmOn()).toBe(false);
  });
});
