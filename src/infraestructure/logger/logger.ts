import winston from "winston";

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
};

const level = () => {
  const env = process.env.NODE_ENV || "development";

  const logLevelByEnviroment = {
    development: {
      log_level: "debug",
    },
    uat: {
      log_level: "warn",
    },
    production: {
      log_level: "error",
    },
    yaba: {
      log_level: "warn",
    },
  };

  const logLevel = logLevelByEnviroment[env];
  return logLevel;
};

const colors = {
  error: "red",
  warn: "yellow",
  info: "white",
  debug: "green",
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: "logs/error.log",
    level: "error",
  }),
  new winston.transports.File({
    filename: "logs/warn.log",
    level: "warn",
  }),
  new winston.transports.File({
    filename: "logs/info.log",
    level: "info",
  }),
  new winston.transports.File({
    filename: "logs/debug.log",
    level: "debug",
  }),
  new winston.transports.File({ filename: "logs/all.log" }),
];

const Logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

export default Logger;
