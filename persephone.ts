#!/usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";

import { KafkaConnectionFactory } from "./src/infraestructure/queue";
import { MongoConectionFactory } from "./src/infraestructure/database";
import { ProspectUserModel } from "./src/domain//thebes_sphinx/prospect-user.model";

const main = async () => {
  let time = 0;
  let size = 0;

  console.log(
    chalk.red(figlet.textSync("Persephone", { horizontalLayout: "full" }))
  );

  const kafkaConnectionFactory = new KafkaConnectionFactory();
  await kafkaConnectionFactory.registerKafkaTopicsIfNotExists();

  const mongoConnectionFactory = new MongoConectionFactory();
  const dbContext = mongoConnectionFactory.getOrCreateDatabaseContext();

  const prospectUser = {
    displayName: "Igor Magro",
    userEmail: "ilm@lionx.com.br",
    createUserTimeStamp: 100,
  };

  ProspectUserModel.create(prospectUser);

  // kafkaConnectionFactory.getConsumers().then((consumers) => {
  //   consumers.forEach(async (consumer) => {
  //     await consumer.run({
  //       eachBatchAutoResolve: true,
  //       partitionsConsumedConcurrently: 4,
  //       eachBatch: async ({ batch, heartbeat }) => {
  //         console.log(batch.messages.length);
  //         console.log(batch.messages[0]?.headers["email"].toString());
  //         console.log(batch.topic);
  //         console.log(batch.partition);

  //         await heartbeat();
  //       },
  //     });

  //     consumer.on(consumer.events.END_BATCH_PROCESS, async ({ payload }) => {
  //       const { duration, batchSize } = payload;

  //       time += duration;
  //       size += batchSize;

  //       console.log("duration:", duration, " - batchSize:", batchSize);
  //       console.log("total duration:", time, " - total size:", size);
  //     });
  //   });
  // });
};

main().catch(console.error);
