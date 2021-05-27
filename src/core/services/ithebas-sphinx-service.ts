import { KafkaMessage } from "kafkajs";

export interface IThebasSphinxService {
  handleProspectUsersQueue(messageBatch: KafkaMessage[]): void;
}
