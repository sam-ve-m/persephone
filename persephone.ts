#!/usr/bin/env node

import { QueueController } from "./src/controllers/queue-controller";
const chalk = require("chalk");
const figlet = require("figlet");

const main = function (): void {
  console.log(
    chalk.red(figlet.textSync("Persephone", { horizontalLayout: "full" }))
  );

  const queueController = new QueueController();
  queueController.runQueueConsumerService();
};

main();
