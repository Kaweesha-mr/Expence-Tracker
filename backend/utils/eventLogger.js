const {createLogger,format,transports} = require('winston');
const {combine,timestamp,printf} = format;


//DEFINE CUSTOME LOG FORMAT
const logFormat = printf(({level,message,timestamp}) => {
    return `${timestamp} ${level}: ${message}`;
})


//CREATE LOGGER

const logger = createLogger({
    level:'info',
    format:combine(
        timestamp({format:'YYYY-MM-DD HH:mm:ss'}),
        logFormat
    ),
    transports:[
        new transports.Console(),
        new transports.File({filename:'./logs/events.log'})
    ]
})

module.exports = logger;