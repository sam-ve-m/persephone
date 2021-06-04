import { KafkaMessage } from "kafkajs";

export interface IThebasSphinxService {
  handleProspectUsersQueue(prospectUsersMessages: KafkaMessage[]): void;
  handleTermsQueue(termsMessages: KafkaMessage[]): void;
  handleSuitabilitiesQueue(suitabilitiesMessages: KafkaMessage[]): void;
  handleDtvmUsersQueue(dtvmUsersMessages: KafkaMessage[]): void;
}
