// The reading of the pressure value from the sensor is simulated in this implementation.
// Because the focus of the exercise is on the other class.
class Sensor {
    static Offset() {
        return 16;
    }

    static samplePressure() {
        // placeholder implementation that simulates a real sensor in a real tire
        let pressureTelemetryValue = Math.floor(6 * Math.random() * Math.random());
        return pressureTelemetryValue;
    }

    popNextPressurePsiValue() {
        let pressureTelemetryValue = Sensor.samplePressure();
        return Sensor.Offset() + pressureTelemetryValue;
    }
}

module.exports = Sensor;
