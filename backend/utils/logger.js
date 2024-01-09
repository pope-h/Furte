const winston = require("winston");

const logger = winston.createLogger({
  level: "info", // Adjust as needed
  transports: [new winston.transports.File({ filename: "app.log" })],
});

module.exports = logger;
