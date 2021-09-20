import { KafkaMessage } from "kafkajs";

export interface IHyperionService {
  handleResponsesQueue(responseMessages: KafkaMessage[]): void;
}
