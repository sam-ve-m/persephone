#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const figlet = require("figlet");
const factories_1 = require("./src/services/factories");
const queue_controller_1 = require("./src/controllers/queue-controller");
const redis_1 = require("./src/infraestructure/redis");
const queue_service_1 = require("./src/services/queue-service");
const main = function () {
    console.log(chalk.red(figlet.textSync("Persephone", { horizontalLayout: "full" })));
    const handleQueueStrategyFactory = new factories_1.HandleQueueStrategyFactory();
    const redisClientFactory = new redis_1.RedisClientFactory();
    const queueService = new queue_service_1.QueueService(redisClientFactory, handleQueueStrategyFactory);
    const queueController = new queue_controller_1.QueueController(queueService);
    queueController.runQueueConsumerService();
};
main();
