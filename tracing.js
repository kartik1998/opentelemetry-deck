const opentelemetry = require('@opentelemetry/sdk-node');
const { ZipkinExporter } = require('@opentelemetry/exporter-zipkin');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');

const sdk = new opentelemetry.NodeSDK({
  traceExporter: new ZipkinExporter({
    serviceName: 'telemetry-deck'
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk
  .start()
  .then(() => {
    console.log('Tracing initialized');
  })
  .catch((err) => {
    console.log(`error in initializing tracing: ${error.message}`);
  });
