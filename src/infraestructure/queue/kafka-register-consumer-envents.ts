import { Consumer } from "kafkajs";

import Logger from "@infraestructure/logger/logger";

export module KafkaRegisterConsumerEvents {
  export const registerIntoConsumerEvents = (consumer: Consumer) => {
    onConsumerConnectToBroker(consumer);
    onStartBatchMessagesProcess(consumer);
    onEndBatchMessagesProcess(consumer);
    onConsumerJoinGroup(consumer);
    onConsumerHasStopped(consumer);
    onConsumerRequestTimeout(consumer);
    onConsumerUnsubscribeTopics(consumer);
  };

  const onConsumerConnectToBroker = (consumer: Consumer) => {
    consumer.on(consumer.events.CONNECT, async ({ payload }) => {
      const message = `Consumer conected to broker: ${JSON.stringify(payload)}`;
      Logger.info(message);
    });
  };

  const onStartBatchMessagesProcess = (consumer: Consumer) => {
    consumer.on(consumer.events.START_BATCH_PROCESS, async ({ payload }) => {
      const message = `Start batch: ${JSON.stringify(payload)}`;
      Logger.info(message);
    });
  };

  const onEndBatchMessagesProcess = (consumer: Consumer) => {
    consumer.on(consumer.events.END_BATCH_PROCESS, async ({ payload }) => {
      const message = `End batch: ${JSON.stringify(payload)}`;
      Logger.info(message);
    });
  };

  const onConsumerJoinGroup = (consumer: Consumer) => {
    consumer.on(consumer.events.GROUP_JOIN, async ({ payload }) => {
      const message = `Consumer has joined the group: ${JSON.stringify(
        payload
      )}`;
      Logger.info(message);
    });
  };

  const onConsumerHasStopped = (consumer: Consumer) => {
    consumer.on(consumer.events.STOP, async ({ payload }) => {
      const message = `Consumer has stopped:
      : ${JSON.stringify(payload)}`;
      Logger.info(message);
    });
  };

  const onConsumerRequestTimeout = (consumer: Consumer) => {
    consumer.on(consumer.events.REQUEST_TIMEOUT, async ({ payload }) => {
      const message = `Request to a broker has timed out:
        : ${JSON.stringify(payload)}`;
      Logger.info(message);
    });
  };

  const onConsumerUnsubscribeTopics = (consumer: Consumer) => {
    consumer.on(
      consumer.events.RECEIVED_UNSUBSCRIBED_TOPICS,
      async ({ payload }) => {
        const message = `Consumer group unsubscribe topic: ${JSON.stringify(
          payload
        )}`;
        Logger.info(message);
      }
    );
  };
}
