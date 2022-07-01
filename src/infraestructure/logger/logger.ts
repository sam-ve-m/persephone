import winston from "winston";

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
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
    (info) => `{ "asctime": ${info.timestamp}, "name": ${"NAME"}, "levelname": ${info.level}, "caller":  ${"CALLER"}, "args": ${info.message} }`
  )
);

const transports = [
  new winston.transports.Console()
];

const Logger = winston.createLogger({
  level: "info",
  levels,
  format,
  transports,
});



export default Logger;
