const chai = require("chai");
const sinon = require("sinon");
const Alarm = require("./alarm.js");
const Sensor = require("./sensor.js");

const { expect } = chai;

describe("Alarm", function () {
  let alarm, sensorStub;

  beforeEach(function () {
    sensorStub = sinon.createStubInstance(Sensor);
    alarm = new Alarm(sensorStub);
  });

  it("should initialize with alarmOff", function () {
    expect(alarm.alarmOn()).to.be.false;
  });

  it("should set alarmOn when pressure is below low threshold", function () {
    sensorStub.popNextPressurePsiValue.returns(15);

    alarm.check();

    expect(alarm.alarmOn()).to.be.true;
  });

  it("should set alarmOn when pressure is above high threshold", function () {
    sensorStub.popNextPressurePsiValue.returns(22);

    alarm.check();

    expect(alarm.alarmOn()).to.be.true;
  });

  it("should not set alarmOn when pressure is within thresholds", function () {
    sensorStub.popNextPressurePsiValue.returns(18);

    alarm.check();

    expect(alarm.alarmOn()).to.be.false;
  });

  it("should not set alarmOn when pressure is at low threshold", function () {
    sensorStub.popNextPressurePsiValue.returns(17);

    alarm.check();

    expect(alarm.alarmOn()).to.be.false;
  });

  it("should not set alarmOn when pressure is at high threshold", function () {
    sensorStub.popNextPressurePsiValue.returns(21);

    alarm.check();

    expect(alarm.alarmOn()).to.be.false;
  });
});
