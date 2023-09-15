const { expect } = require('chai');
const { Alarm } = require('./alarm.js');


class MockSensor {
    popNextPressurePsiValue() {
        
        return 25;
    }
}

describe('Alarm', () => {
    it('should not be initially on', () => {
        const alarm = new Alarm(new MockSensor());
        expect(alarm.alarmOn()).to.equal(false);
    });

    it('should turn on when pressure is too low', () => {
        const sensor = new MockSensor();
        sensor.popNextPressurePsiValue = () => 15; 
        const alarm = new Alarm(sensor);

        alarm.check();
        expect(alarm.alarmOn()).to.equal(true);
    });

    it('should turn on when pressure is too high', () => {
        const sensor = new MockSensor();
        sensor.popNextPressurePsiValue = () => 22; 
        const alarm = new Alarm(sensor);

        alarm.check();
        expect(alarm.alarmOn()).to.equal(true);
    });

    it('should stay off when pressure is within the normal range', () => {
        const sensor = new MockSensor();
        sensor.popNextPressurePsiValue = () => 18; 
        const alarm = new Alarm(sensor);

        alarm.check();
        expect(alarm.alarmOn()).to.equal(false);
    });
});
