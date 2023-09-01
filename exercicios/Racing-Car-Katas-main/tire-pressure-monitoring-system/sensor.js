// The reading of the pressure value from the sensor is simulated in this implementation.
// Because the focus of the exercise is on the other class.

/*A classe Sensor fornecida para o exercício simula o comportamento de um sensor de pneu real, fornecendo valores aleatórios, mas realistas.*/


/*
class Sensor {
	constructor()

	offSet() {
		return 16;
	}

	samplePressure() {
		let pressureTelemetryValue = Math.floor(6 * Math.random() * Math.random());
		return pressureTelemetryValue;
	}

	popNextPressurePsiValue() {
		let pressureTelemetryValue = Sensor.samplePressure();
		return Sensor.Offset() + pressureTelemetryValue;
	}	
}


*/

/*
Math.floor(x): Retorna o maior inteiro que é menor ou igual a um número.
Math.random(): Retorna um número pseudo-aleatório entre 0 e 1.
*/

Sensor = function() {

	Sensor.Offset = function() { return 16; };

	Sensor.samplePressure = function() {
		// placeholder implementation that simulate a real sensor in a real tire
		var pressureTelemetryValue = Math.floor(6 * Math.random() * Math.random());
		return pressureTelemetryValue;
	};
};

Sensor.prototype = {

	popNextPressurePsiValue: function() {
		var pressureTelemetryValue = Sensor.samplePressure();

		return Sensor.Offset() + pressureTelemetryValue;
	}
};

module.exports = Sensor;
