#!/usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";

import { KafkaConnectionFactory } from "@infraestructure/queue";
import { MongoConectionFactory } from "@infraestructure/database";

import { TopicServiceFactory } from "@service/factories/topic-service-factory";
import { PartitionHandlers } from "@service/handlers/partition-handlers";

const main = async () => {
  console.log(
    chalk.red(figlet.textSync("Persephone", { horizontalLayout: "full" }))
  );

  let time = 0;
  let size = 0;

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

      consumer.on(consumer.events.START_BATCH_PROCESS, async ({ payload }) => {
        const { topic, partition, batchSize } = payload;

        size += batchSize;

        console.log("Start batch - batchSize:", batchSize, topic, partition);
      });

      consumer.on(consumer.events.END_BATCH_PROCESS, async ({ payload }) => {
        const { duration, batchSize } = payload;

        time += duration;
        size += batchSize;

        console.log(
          "End Batch - duration:",
          duration,
          " - batchSize:",
          batchSize
        );
        console.log(
          "End Batch - total duration:",
          time,
          " - total size:",
          size
        );
      });

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
