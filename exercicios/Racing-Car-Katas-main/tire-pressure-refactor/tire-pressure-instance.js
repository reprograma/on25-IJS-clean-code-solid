const {
  Alarm,
} = require("../../Racing-Car-Katas-main/tire-pressure-refactor/tire-pressure-monitoring-system/Alarm");

const alarm1 = new Alarm(16);

alarm1.popNextPressurePsiValue();
alarm1.alert();
alarm1.check();

alarm1.popNextPressurePsiValue();
alarm1.alert();
alarm1.check();

alarm1.popNextPressurePsiValue();
alarm1.alert();
alarm1.check();

alarm1.popNextPressurePsiValue();
alarm1.alert();
alarm1.check();

alarm1.popNextPressurePsiValue();
alarm1.alert();
alarm1.check();

alarm1.popNextPressurePsiValue();

alarm1.alert();
alarm1.check();

console.log(alarm1);
