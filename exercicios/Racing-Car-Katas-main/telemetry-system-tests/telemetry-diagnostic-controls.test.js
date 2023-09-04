const TelemetryDiagnosticControls = require('../telemetry-system/telemetry-diagnostic-controls.js');
const TelemetryClient = require('../telemetry-system/telemetry-client.js');

describe('Telemetry System', function() {
  describe('TelemetryDiagnosticControls', function() {
    it(' deve enviar uma mensagem de diagnóstico e receber uma resposta de mensagem de status', function() {
      const mockTelemetryClient = new TelemetryClient();

      const telemetryControls = new TelemetryDiagnosticControls();
      telemetryControls._telemetryClient = mockTelemetryClient;

      mockTelemetryClient.connect = jest.fn();
      mockTelemetryClient.disconnect = jest.fn();
      mockTelemetryClient.send = jest.fn();
      mockTelemetryClient.receive = jest.fn().mockReturnValue('Mocked status message');


      telemetryControls.checkTransmission();

      expect(mockTelemetryClient.connect).toHaveBeenCalledTimes(1);
      expect(mockTelemetryClient.disconnect).toHaveBeenCalledTimes(1);
      expect(mockTelemetryClient.send).toHaveBeenCalledWith('AT#UD');
      expect(mockTelemetryClient.receive).toHaveBeenCalledTimes(1);

    []
      expect(telemetryControls.readDiagnosticInfo()).toBe('Mocked status message');
    });
  });
});
