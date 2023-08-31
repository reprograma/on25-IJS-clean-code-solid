const TelemetryDiagnosticControls = require("../telemetry-system/telemetry-diagnostic-controls.js");
const TelemetryClient = require("../telemetry-system/telemetry-client.js");

describe("TelemetryDiagnosticControls", () => {
  let diagnosticControls;

  beforeEach(() => {
    diagnosticControls = new TelemetryDiagnosticControls();
  });

  it("readDiagnisticInfo should initially be empty", () => {
    expect(diagnosticControls.readDiagnosticInfo()).toBe("");
  });
  it("writeDiagnosticInfo should set diagnisticInfo", () => {
    diagnosticControls.writeDiagnosticInfo("Test diagnostic info");
    expect(diagnosticControls.readDiagnosticInfo()).toBe(
      "Test diagnostic info"
    );
  });

  //não to conseguindo fazer o teste checkTransmission
  
});
