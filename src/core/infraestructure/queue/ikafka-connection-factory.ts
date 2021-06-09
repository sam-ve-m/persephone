import { Kafka } from "kafkajs";
import { ConsumerWrapper } from "@domain/queue/consumer-wrapper";

export interface IKafkaConnectionFactory {
  getOrCreateKafkaInstance(): Kafka;
  registerKafkaTopicsIfNotExists(): Promise<void>;
  getConsumers(): Promise<ConsumerWrapper[]>;
}
