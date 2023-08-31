class TelemetryClient {
  #onlineStatus;
  #diagnosticMessageResult;
  constructor() {
    this.#onlineStatus = false;
    this.#diagnosticMessageResult = "";
  }

  static diagnosticMessage() {
    return "AT#UD";
  }
  get onlineStatus() {
    return this.#onlineStatus;
  }

  connectionEventsSimulator(min, max) {
    let delta = max + 1 - min;
    return min + Math.floor(delta * Math.random());
  }

  connect(telemetryServerConnectionString) {
    if (!telemetryServerConnectionString) {
      throw new Error("missing telemetryServerConnectionString parameter");
    }
    let success = this.connectionEventsSimulator(1, 10) <= 8;

    this.#onlineStatus = success;
  }
  disconnect() {
    this.#onlineStatus = false;
  }
  send(message) {
    if (!message) {
      throw new Error("missing message parameter");
    }

    if (message === TelemetryClient.diagnosticMessage()) {
      // simulate a status report
      this.#diagnosticMessageResult = `
        "LAST TX rate................ 100 MBPS\r\n" +
        "HIGHEST TX rate............. 100 MBPS\r\n" +
        "LAST RX rate................ 100 MBPS\r\n" +
        "HIGHEST RX rate............. 100 MBPS\r\n" +
        "BIT RATE.................... 100000000\r\n" +
        "WORD LEN.................... 16\r\n" +
        "WORD/FRAME.................. 511\r\n" +
        "BITS/FRAME.................. 8192\r\n" +
        "MODULATION TYPE............. PCM/FM\r\n" +
        "TX Digital Los.............. 0.75\r\n" +
        "RX Digital Los.............. 0.10\r\n" +
        "BEP Test.................... -5\r\n" +
        "Local Rtrn Count............ 00\r\n" +
        "Remote Rtrn Count........... 00"`;

      return;
    }
  }

  receive() {
    if (!this.#diagnosticMessageResult) {
      let message = "";
      const messageLength = this.connectionEventsSimulator(50, 110);
      for (let i = messageLength; i >= 0; --i) {
        message += this.connectionEventsSimulator(40, 126).toString();
      }
      return message;
    } else {
      const message = this.#diagnosticMessageResult;
      this.#diagnosticMessageResult = "";
      return message;
    }
  }

  // here should go the real Send operation (not needed for this exercise)
}

module.exports = TelemetryClient;


const telemetryClient = new TelemetryClient();
// Verificando o status online (deve ser falso no início)
console.log('Status Online:', telemetryClient.onlineStatus);

// Tentando conectar
try {
  telemetryClient.connect('exampleConnectionString');
  console.log('Status Online após a conexão:', telemetryClient.onlineStatus);
} catch (error) {
  console.error('Erro ao conectar:', error);
}

// Enviando uma mensagem de diagnóstico
telemetryClient.send(TelemetryClient.diagnosticMessage());

// Recebendo a mensagem de diagnóstico
const diagnosticMessage = telemetryClient.receive();
console.log('Mensagem de Diagnóstico Recebida:');
console.log(diagnosticMessage);

// Desconectando
telemetryClient.disconnect();
console.log('Status Online após a desconexão:', telemetryClient.onlineStatus);