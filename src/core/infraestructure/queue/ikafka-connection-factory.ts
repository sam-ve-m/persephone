import { Kafka, Consumer } from "kafkajs";

export interface IKafkaConnectionFactory {
  getOrCreateKafkaInstance(): Kafka;
  registerKafkaTopicsIfNotExists(): Promise<void>;
  getConsumers(): Promise<Consumer[]>;
}
