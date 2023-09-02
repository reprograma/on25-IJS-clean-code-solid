class TelemetryClient {
    constructor() {
        this._onlineStatus = false;
        this._diagnosticMessageResult = '';
    }

    static diagnosticMessage() {
        return 'AT#UD';
    }

    onlineStatus() {
        return this._onlineStatus;
    }

    _connectionEventsSimulator(min, max) {
        const delta = max + 1 - min;
        return min + Math.floor(delta * Math.random());
    }

    connect(telemetryServerConnectionString) {
        if (typeof telemetryServerConnectionString === 'undefined' || telemetryServerConnectionString === '') {
            throw new Error('missing telemetryServerConnectionString parameter');
        }

        const success = this._connectionEventsSimulator(1, 10) <= 8;

        this._onlineStatus = success;
    }

    disconnect() {
        this._onlineStatus = false;
    }

    send(message) {
        if (typeof message === 'undefined' || message === '') {
            throw new Error('missing message parameter');
        }

        if (message === TelemetryClient.diagnosticMessage()) {
            this._diagnosticMessageResult = `LAST TX rate................ 100 MBPS\r\n
        HIGHEST TX rate............. 100 MBPS\r\n
        LAST RX rate................ 100 MBPS\r\n
        HIGHEST RX rate............. 100 MBPS\r\n
        BIT RATE.................... 100000000\r\n
        WORD LEN.................... 16\r\n
        WORD/FRAME.................. 511\r\n
        BITS/FRAME.................. 8192\r\n
        MODULATION TYPE............. PCM/FM\r\n
        TX Digital Los.............. 0.75\r\n
        RX Digital Los.............. 0.10\r\n
        BEP Test.................... -5\r\n
        Local Rtrn Count............ 00\r\n
        Remote Rtrn Count........... 00`;

            return;
        }

        // Real send operation (not implemented here)
    }

    receive() {
        let message;

        if (typeof this._diagnosticMessageResult === 'undefined' || this._diagnosticMessageResult === '') {
            message = '';
            const messageLength = this._connectionEventsSimulator(50, 110);
            for (let i = messageLength; i >= 0; --i) {
                message += this._connectionEventsSimulator(40, 126).toString();
            }
        } else {
            message = this._diagnosticMessageResult;
            this._diagnosticMessageResult = '';
        }

        return message;
    }
}


class TelemetryDiagnosticControls {
    constructor() {
        this._diagnosticChannelConnectionString = '*111#';
        this._telemetryClient = new TelemetryClient();
        this._diagnosticInfo = '';
    }

    readDiagnosticInfo() {
        return this._diagnosticInfo;
    }

    writeDiagnosticInfo(newValue) {
        this._diagnosticInfo = newValue;
    }

    checkTransmission() {
        this._diagnosticInfo = '';
        this._telemetryClient.disconnect();

        let retryLeft = 3;
        while (this._telemetryClient.onlineStatus() === false && retryLeft > 0) {
            this._telemetryClient.connect(this._diagnosticChannelConnectionString);
            retryLeft -= 1;
        }

        if (this._telemetryClient.onlineStatus() === false) {
            throw new Error('Unable to connect');
        }

        this._telemetryClient.send(TelemetryClient.diagnosticMessage());
        this._diagnosticInfo = this._telemetryClient.receive();
    }
}

