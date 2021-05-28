import { Kafka, Consumer } from "kafkajs";

import { env } from "@root/enviroment";
import { IKafkaConnectionFactory } from "@core/infraestructure/queue";
import { ConsumerWrapper } from "@domain/queue/consumer-wrapper";

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

  async getConsumers(): Promise<ConsumerWrapper[]> {
    const kafka = this.getOrCreateKafkaInstance();

    let consumers: ConsumerWrapper[] = new Array();
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

        const consumerWrapper = {
          queueConsumer: consumer,
          topic: topicProperties.topic,
        };

        consumers.push(consumerWrapper);
      }
    });

    await Promise.all(connectSubscribrePromisses);

    return Promise.resolve(consumers);
  }
}
