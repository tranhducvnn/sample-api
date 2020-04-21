const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
    level: 'info',
    format: combine(label({ label: 'sample-api' + ': ' }), timestamp(), format.splat(), format.json(), myFormat),
    // defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log`
        // - Write all logs error (and below) to `error.log`.
        //
        new transports.File({ filename: '../logs/sample-api/log.error.log', level: 'error' }),
        new transports.File({ filename: '../logs/sample-api/log.all.log' })
    ]
});
module.exports = logger;
