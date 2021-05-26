#!/usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";

import { KafkaConnectionFactory } from "./src/infraestructure/queue";

const main = async () => {
  console.log(
    chalk.red(figlet.textSync("Persephone", { horizontalLayout: "full" }))
  );

  let time = 0;
  let size = 0;

  const kafkaConnectionFactory = new KafkaConnectionFactory();
  await kafkaConnectionFactory.registerKafkaTopicsIfNotExists();

  kafkaConnectionFactory.getConsumers().then((consumers) => {
    consumers.forEach(async (consumer) => {
      await consumer.run({
        eachBatchAutoResolve: true,
        partitionsConsumedConcurrently: 4,
        eachBatch: async ({ batch, heartbeat }) => {
          console.log(batch.messages.length);
          console.log(batch.topic);
          console.log(batch.partition);

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
