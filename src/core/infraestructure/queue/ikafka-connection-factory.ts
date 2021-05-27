import { Kafka } from "kafkajs";
import { ConsumerWrapper } from "@domain/teste/consumer-wrapper";

export interface IKafkaConnectionFactory {
  getOrCreateKafkaInstance(): Kafka;
  registerKafkaTopicsIfNotExists(): Promise<void>;
  getConsumers(): Promise<ConsumerWrapper[]>;
}
