import { KafkaMessage } from "kafkajs";

export interface IEbisuService {
  handleBankAccountRegisters(responseMessages: KafkaMessage[]): void;
  handleBankAccountUpdates(responseMessages: KafkaMessage[]): void;
  handleBankAccountDeletions(responseMessages: KafkaMessage[]): void;

  handleExchangeProposalSimulation(responseMessages: KafkaMessage[]): void;
  handleExchangeProposalPreExecution(responseMessages: KafkaMessage[]): void;
  handleExchangeProposalExecution(responseMessages: KafkaMessage[]): void;

  handleCashFlowWithdrawToExternalBank(responseMessages: KafkaMessage[]): void;
}
