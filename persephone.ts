#!/usr/bin/env node

import { run } from "./src";
const chalk = require("chalk");
const figlet = require("figlet");

console.log(
  chalk.red(figlet.textSync("Persephone", { horizontalLayout: "full" }))
);

run();
