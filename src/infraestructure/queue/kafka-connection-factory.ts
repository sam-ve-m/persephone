import { Kafka } from "kafkajs";

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
    const consumers: ConsumerWrapper[] = [];
    const connectSubscribePromises: Promise<any>[] = [];

    for (const topicProperties of env.kafka_metadata.topics_properties) {
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

        connectSubscribePromises.push(connect);
        connectSubscribePromises.push(subscribe);

        const consumerWrapper = {
          queueConsumer: consumer,
          partitionsConsumedConcurrently:
            topicProperties.partitionsConsumedConcurrently,
        };

        consumers.push(consumerWrapper);
      }
    }

    await Promise.all(connectSubscribePromises);
    return Promise.resolve(consumers);
  }
}
