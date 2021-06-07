import { KafkaMessage } from "kafkajs";

export interface IThebasSphinxService {
  handleProspectUserQueue(prospectUsersMessages: KafkaMessage[]): void;
  handleTermQueue(termsMessages: KafkaMessage[]): void;
  handleSuitabilityQueue(suitabilitiesMessages: KafkaMessage[]): void;
  handleDtvmUserQueue(dtvmUsersMessages: KafkaMessage[]): void;
  handleDtvmUpdateUserQueue(dtvmUsersMessages: KafkaMessage[]): void;
}
