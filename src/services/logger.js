const pino = require("pino");

const logstream = require("./logstream");

const pinoLogstream = logstream({
  logPath: process.env.SERVER_LOGGER_PATH,
  interval: process.env.SERVER_LOGGER_INTERVAL,
  isSaveEnabled: process.env.SERVER_LOGGER_SAVE_LOGS
});

module.exports = pino(null, pinoLogstream);
