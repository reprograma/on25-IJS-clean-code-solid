const TelemetryClient = require('./telemetry-client.js');

class TelemetryDiagnosticControls {
  telemetryClient = new TelemetryClient();
  diagnosticInfo = '';

  constructor(telemetryClient, diagnosticInfo){
    this.telemetryClient = telemetryClient;
    this.diagnosticInfo = diagnosticInfo;
  }

	diagnosticChannelConnectionString() { 
    return '*111#'; 
  }

	
	readDiagnosticInfo() {
		return this.diagnosticInfo;
	}
	
  
	writeDiagnosticInfo(newValue) {
		this.diagnosticInfo = newValue;
	}

  checkTransmission() {
    this.diagnosticInfo = '';
    this.telemetryClient.disconnect();
    let retryLeft = 3;
    while (this.telemetryClient.onlineStatus() === false && retryLeft > 0) {
      this.telemetryClient.connect(this.diagnosticChannelConnectionString);
      retryLeft -= 1;
    }
    if (this.telemetryClient.onlineStatus() === false) {
      throw 'Unable to connect';
    }
    this.telemetryClient.send(TelemetryClient.diagnosticMessage());
    this.diagnosticInfo = this.telemetryClient.receive();
  }
  
};



	

module.exports = TelemetryDiagnosticControls;
