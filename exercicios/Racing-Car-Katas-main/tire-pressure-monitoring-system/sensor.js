
class Sensor {
    offset() {
        return 16;
    }

    samplePressure() {
        var pressureTelemetryValue = 15; //Math.floor(6 * Math.random() * Math.random());
        return pressureTelemetryValue;
    }

    popNextPressurePsiValue() {
        var pressureTelemetryValue = Sensor.samplePressure();
        return Sensor.Offset() + pressureTelemetryValue;
    }
}

module.exports = Sensor;