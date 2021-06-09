#!/usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";

import {
  KafkaConnectionFactory,
  KafkaRegisterConsumerEvents,
} from "@infraestructure/queue";
import { MongoConectionFactory } from "@infraestructure/database";

import { TopicServiceFactory } from "@service/factories/topic-service-factory";
import { PartitionHandlers } from "@service/handlers/partition-handlers";

const main = async () => {
  console.log(
    chalk.red(figlet.textSync("Persephone", { horizontalLayout: "full" }))
  );

  const kafkaConnectionFactory = new KafkaConnectionFactory();
  await kafkaConnectionFactory.registerKafkaTopicsIfNotExists();

  const mongoConnectionFactory = new MongoConectionFactory();
  await mongoConnectionFactory.getOrCreateDatabaseContext();

  const topicPartitionToService =
    TopicServiceFactory.registerTopicFactoriesService();
  const partitionHandleCallbacks =
    PartitionHandlers.registerPartitionsHandleCallbacks();

  kafkaConnectionFactory.getConsumers().then((consumerWrapperList) => {
    consumerWrapperList.forEach(async (consumerWrapper) => {
      const consumer = consumerWrapper.queueConsumer;
      const partitionsConsumedConcurrently =
        consumerWrapper.partitionsConsumedConcurrently;

      KafkaRegisterConsumerEvents.registerIntoConsumerEvents(consumer);

      await consumer.run({
        eachBatchAutoResolve: true,
        partitionsConsumedConcurrently: partitionsConsumedConcurrently,
        eachBatch: async ({ batch, heartbeat }) => {
          const topicService =
            TopicServiceFactory.getServiceToHandleParitionMessage(
              batch.topic,
              topicPartitionToService
            );

          const partitionHandleCallback =
            PartitionHandlers.getPartitionHandleCallback(
              batch.topic,
              batch.partition,
              partitionHandleCallbacks
            );

          partitionHandleCallback(topicService, batch.messages);

          await heartbeat();
        },
      });
    });
  });
};

main().catch(console.error);
