const morgan = require("morgan");

const logstream = require("../services/logstream");

const morganLogstream = logstream({
  logPath: process.env.REQUEST_LOGGER_PATH,
  interval: process.env.REQUEST_LOGGER_INTERVAL,
  isSaveEnabled: process.env.REQUEST_LOGGER_SAVE_LOGS
});

module.exports = [morgan("combined", { stream: morganLogstream })];
