import { KafkaMessage } from "kafkajs";

export interface IEbisuService {
  handleBankAccountRegisters(responseMessages: KafkaMessage[]): void;
  handleBankAccountUpdates(responseMessages: KafkaMessage[]): void;
  handleBankAccountDeletions(responseMessages: KafkaMessage[]): void;
}
