#!/usr/bin/env node

const chalk = require("chalk");
const figlet = require("figlet");

import { HandleQueueStrategyFactory } from "./src/services/factories";
import { QueueController } from "./src/controllers/queue-controller";
import { RedisClientFactory } from "./src/infraestructure/redis";
import { QueueService } from "./src/services/queue-service";

const main = function (): void {
  console.log(
    chalk.red(figlet.textSync("Persephone", { horizontalLayout: "full" }))
  );

  const handleQueueStrategyFactory = new HandleQueueStrategyFactory();
  const redisClientFactory = new RedisClientFactory();

  const queueService = new QueueService(
    redisClientFactory,
    handleQueueStrategyFactory
  );

  const queueController = new QueueController(queueService);
  queueController.runQueueConsumerService();
};

main();
