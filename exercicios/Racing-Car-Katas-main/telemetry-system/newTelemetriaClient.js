class TelemetryClient {

  constructor() {
    this.onlineStatus = false;
    this.diagnosticMessageResult = '';
  }

  diagnosticMessage() {
    return 'AT#UD';
  }

  onlineStatus() {
    return this.onlineStatus;
  }

  connectionEventsSimulator(min, max) {
    let delta = max + 1 - min;
    return min + Math.floor(delta * Math.random());
  }

  connect(telemetryServerConnectionString) {
    if (typeof (telemetryServerConnectionString) === 'undefined' || telemetryServerConnectionString === '') {
      throw 'missing telemetryServerConnectionString parameter';
    } else {
      let success = this.connectionEventsSimulator(1, 10) <= 8;
      this.onlineStatus = success;
    }
  }

  disconnect() {
    this.onlineStatus = false;
  }


  send(message) {
    if (typeof (message) === 'undefined' || message === '') {
      throw 'missing message parameter';
    } else if (message === TelemetryClient.diagnosticMessage()) {

      this._diagnosticMessageResult =
        'LAST TX rate................ 100 MBPS\r\n'
        + 'HIGHEST TX rate............. 100 MBPS\r\n'
        + 'LAST RX rate................ 100 MBPS\r\n'
        + 'HIGHEST RX rate............. 100 MBPS\r\n'
        + 'BIT RATE.................... 100000000\r\n'
        + 'WORD LEN.................... 16\r\n'
        + 'WORD/FRAME.................. 511\r\n'
        + 'BITS/FRAME.................. 8192\r\n'
        + 'MODULATION TYPE............. PCM/FM\r\n'
        + 'TX Digital Los.............. 0.75\r\n'
        + 'RX Digital Los.............. 0.10\r\n'
        + 'BEP Test.................... -5\r\n'
        + 'Local Rtrn Count............ 00\r\n'
        + 'Remote Rtrn Count........... 00';
    }
    return;
  }

  receive() {
    let message;
    if (typeof (this.diagnosticMessageResult) === 'undefined' || this.diagnosticMessageResult === '') {
      message = '';
      let messageLength = this.connectionEventsSimulator(50, 110);
      for (let i = messageLength; i >= 0; --i) {
        message += this.connectionEventsSimulator(40, 126).toString();
      }
    } else {
      message = this.diagnosticMessageResult;
      this.diagnosticMessageResult = '';
    }
    return message;
  }

};

module.exports = TelemetryClient;


























    // here should go the real Send operation (not needed for this exercise)
  }

  
  

  

  
  
  
  
  
  
  
  
  
  
  

  };

module.exports = TelemetryClient;
