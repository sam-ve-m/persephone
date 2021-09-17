import { KafkaMessage } from "kafkajs";

export interface IGaiaService {
  handleOrdersQueue(orderMessages: KafkaMessage[]): void;
  handleResponsesQueue(responseMessages: KafkaMessage[]): void;
  handleSessionMessagesQueue(sessionMessages: KafkaMessage[]): void;
}
