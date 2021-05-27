#!/usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";
import { KafkaMessage } from "kafkajs";

import { KafkaConnectionFactory } from "./src/infraestructure/queue";
import { MongoConectionFactory } from "./src/infraestructure/database";

import { IThebasSphinxService } from "./src/core/services";

import { ThebasSphinxService } from "./src/services/thebas-sphinx-service";

const registerTopicFactoriesService = () => {
  const topicPartitionToService = {
    "thebes.sphinx.topic": () => {
      const thebasSphinxService = new ThebasSphinxService();
      return thebasSphinxService;
    },
  };

  return topicPartitionToService;
};

const registerPartitionsHandleCallbacks = () => {
  const topicPartitionToService = {
    "thebes.sphinx.topic": {
      "prospect.users.queue": (
        thebasSphinxService: IThebasSphinxService,
        messageBatch: KafkaMessage[]
      ) => {
        thebasSphinxService.handleProspectUsersQueue(messageBatch);
      },
    },
  };

  return topicPartitionToService;
};

const topicsPartitionsEnum = {
  "thebes.sphinx.topic": {
    0: "prospect.users.queue",
  },
};

const getPartitionTopicName = function (
  topic: string,
  partition: Number
): string {
  const nameOfTopicPartitions = topicsPartitionsEnum[topic];
  const partitionName = nameOfTopicPartitions[partition];

  return partitionName;
};

const getPartitionHandleCallback = (
  topic: string,
  partition: Number,
  partitionHandleCallbacks: Object
) => {
  const partitionName = getPartitionTopicName(topic, partition);
  const topicParitionsHandleCallbacks = partitionHandleCallbacks[topic];
  const partitionHandleCallback = topicParitionsHandleCallbacks[partitionName];

  return partitionHandleCallback;
};

const getServiceToHandleParitionMessage = (
  topic: string,
  topicPartitionToService: Object
) => {
  const topicServiceFactory = topicPartitionToService[topic];
  const topicServiceInstance = topicServiceFactory();

  return topicServiceInstance;
};

const main = async () => {
  console.log(
    chalk.red(figlet.textSync("Persephone", { horizontalLayout: "full" }))
  );

  const kafkaConnectionFactory = new KafkaConnectionFactory();
  await kafkaConnectionFactory.registerKafkaTopicsIfNotExists();

  const mongoConnectionFactory = new MongoConectionFactory();
  const connection = await mongoConnectionFactory.getOrCreateDatabaseContext();

  const topicPartitionToService = registerTopicFactoriesService();
  const partitionHandleCallbacks = registerPartitionsHandleCallbacks();

  let time = 0;
  let size = 0;

  kafkaConnectionFactory.getConsumers().then((consumerWrapperList) => {
    consumerWrapperList.forEach(async (consumerWrapper) => {
      const consumer = consumerWrapper.queueConsumer;

      await consumer.run({
        eachBatchAutoResolve: true,
        partitionsConsumedConcurrently: 4,
        eachBatch: async ({ batch, heartbeat }) => {
          const topicService = getServiceToHandleParitionMessage(
            batch.topic,
            topicPartitionToService
          );

          const partitionHandleCallback = getPartitionHandleCallback(
            batch.topic,
            batch.partition,
            partitionHandleCallbacks
          );

          partitionHandleCallback(topicService, batch.messages);

          await heartbeat();
        },
      });

      consumer.on(consumer.events.END_BATCH_PROCESS, async ({ payload }) => {
        const { duration, batchSize } = payload;

        time += duration;
        size += batchSize;

        console.log("duration:", duration, " - batchSize:", batchSize);
        console.log("total duration:", time, " - total size:", size);
      });
    });
  });
};

main().catch(console.error);
