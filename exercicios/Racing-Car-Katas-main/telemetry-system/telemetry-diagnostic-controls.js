let TelemetryClient = require("./telemetry-client.js");

class TelemetryDiagnosticControls {
  #diagnosticChannelConnectionString;
  #telemetryClient;
  #diagnosticInfo;
  constructor() {
    this.#diagnosticChannelConnectionString = () => "*111#";
    this.#telemetryClient = new TelemetryClient();
    this.#diagnosticInfo = "";
  }

  readDiagnosticInfo() {
    return this.#diagnosticInfo;
  }
  writeDiagnosticInfo(newValue) {
    this.#diagnosticInfo = newValue;
  }
  checkTransmission() {
    this.#diagnosticInfo = "";
    this.#telemetryClient.disconnect();
    let retryLeft = 3;
    while (!this.#telemetryClient.onlineStatus && retryLeft > 0) {
      this.#telemetryClient.connect(this.#diagnosticChannelConnectionString());
      retryLeft -= 1;
    }

    if (!this.#telemetryClient.onlineStatus) {
      throw "Unable to connect";
    }

    this.#telemetryClient.send(TelemetryClient.diagnosticMessage());
    this.#diagnosticInfo = this.#telemetryClient.receive();
  }

  //para fins de teste, simular os metodos de telemetryClient é uma prop privada
  setTelemetryClient(telemetryClient) {
    this.#telemetryClient = telemetryClient;
  }
}

const diagnosticControls = new TelemetryDiagnosticControls();
diagnosticControls.checkTransmission();
console.log(diagnosticControls.readDiagnosticInfo());

module.exports = TelemetryDiagnosticControls;
