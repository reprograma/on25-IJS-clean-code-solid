const Sensor = require("./sensor.js");

 class Alarm {
              
  constructor(){
    this.lowPressureThreshold = 17;
    this.highPressureThreshold = 21;
    this.sensor = new Sensor();
    this.alarmOn = false;
  }
  
  check() {
    let psiPressureValue = this.sensor.popNextPressurePsiValue();
    if (psiPressureValue < this.lowPressureThreshold || psiPressureValue > this.highPressureThreshold) {
      this.alarmOn = true;
    }
      
  }

  alarmOn() {
    return this.alarmOn;
  }
}



module.exports = Alarm;


