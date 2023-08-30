const { Alarm } = require("../tire-pressure-monitoring-system/Alarm");

jest.mock("../tire-pressure-monitoring-system/Alarm")

describe("Alarm", () => {
  it("alarm", () => {
    const alarm1 = new Alarm(16);
    alarm1.popNextPressurePsiValue();
	
  });

  it("alarm", () => {
       const sensor = 16
	  const alarm1 = new Alarm(sensor);
	
	
	  expect(typeof alarm1.check).toBe("function");
	  expect(typeof alarm1.popNextPressurePsiValue).toBe("function");
	  expect(typeof alarm1.alert).toBe("function");
  });
});
