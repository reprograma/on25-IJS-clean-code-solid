const TelemetryDiagnosticControls = require('../telemetry-system/telemetry-diagnostic-controls.js');

describe('TelemetryDiagnosticControls', () => {
  it('verifica a transmissão com sucesso', () => {
    const diagnosticControls = new TelemetryDiagnosticControls();

    // Simula a conexão bem-sucedida
    diagnosticControls._telemetryClient.connect = () => true;

    // Chama o método checkTransmission
	  expect(() => diagnosticControls.checkTransmission()).not.toThrow();
	  expect(diagnosticControls._telemetryClient.connect).toHaveBeenCalledWith(
		diagnosticControls._diagnosticChannelConnectionString
	  );
	  expect(diagnosticControls.readDiagnosticInfo()).not.toBe('');
	  });

  it('gera um erro se não for possível conectar', () => {
    const diagnosticControls = new TelemetryDiagnosticControls();

    // Simula a conexão falhando
    diagnosticControls._telemetryClient.connect = () => false;

    // Verifica se uma exceção é lançada
    expect(() => diagnosticControls.checkTransmission()).toThrow('Unable to connect');
    expect(diagnosticControls.readDiagnosticInfo()).toBe('');
  });

  it('escreve informações de diagnóstico', () => {
    const diagnosticControls = new TelemetryDiagnosticControls();

    diagnosticControls.writeDiagnosticInfo('Informação do Test diagnostico');

    expect(diagnosticControls.readDiagnosticInfo()).toBe('Informação do Test diagnostico');
  });
});
