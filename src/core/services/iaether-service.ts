import { KafkaMessage } from "kafkajs";

export interface IAetherService {
  handleOrdersQueue(orderMessages: KafkaMessage[]): void;
  handleInvalidOrdersQueue(invalidOrderMessages: KafkaMessage[]): void;
}
