import { Kafka, Consumer } from "kafkajs";

import { IKafkaConnectionFactory } from "@core/infraestructure/queue";

//TODO: Resolve this problem
import { env } from "@root/../../enviroment";
import { resolve } from "path";

export class KafkaConnectionFactory implements IKafkaConnectionFactory {
  private static kafkaInstance: Kafka;

  getOrCreateKafkaInstance(): Kafka {
    if (!KafkaConnectionFactory.kafkaInstance) {
      const kafka = new Kafka({
        clientId: env.kafka_metadata.clientId,
        brokers: env.kafka_metadata.brokers,
      });

      KafkaConnectionFactory.kafkaInstance = kafka;
    }

    return KafkaConnectionFactory.kafkaInstance;
  }

  async registerKafkaTopicsIfNotExists(): Promise<void> {
    const admin = this.getOrCreateKafkaInstance().admin();
    await admin.connect();

    const isTopicAlreadyCreated = await admin.createTopics({
      waitForLeaders: true,
      topics: env.kafka_metadata.topics_properties,
    });
  }

  async getConsumers(): Promise<Consumer[]> {
    const kafka = this.getOrCreateKafkaInstance();

    let consumers: Consumer[] = new Array();
    let connectSubscribrePromisses: Promise<any>[] = new Array();

    env.kafka_metadata.topics_properties.forEach(async (topicProperties) => {
      let i;
      for (i = 0; i <= topicProperties.numberOfConsumers; i++) {
        const consumer = kafka.consumer({
          groupId: topicProperties.consumerGroup,
        });

        const connect = consumer.connect();
        const subscribe = consumer.subscribe({
          topic: topicProperties.topic,
          fromBeginning: true,
        });

        connectSubscribrePromisses.push(connect);
        connectSubscribrePromisses.push(subscribe);
        consumers.push(consumer);
      }
    });

    await Promise.all(connectSubscribrePromisses);

    return Promise.resolve(consumers);
  }
}
