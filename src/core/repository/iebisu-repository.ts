import {
  IRegisterBankAccount,
  IUpdateBankAccount,
  IDeleteBankAccount,
  IExchangeProposalSimulation,
  IExchangeProposalPreExecution,
  IExchangeProposalExecution,
  ICashFlowWithdrawToExternalBank,
} from "@domain/ebisu";

export interface IEbisuRepository {
  saveBankAccountRegisters(bankAccountRegisters: IRegisterBankAccount[]): Promise<any>;
  saveBankAccountUpdates(bankAccountUpdates: IUpdateBankAccount[]): Promise<any>;
  saveBankAccountDeletions(bankAccountDeletions: IDeleteBankAccount[]): Promise<any>;

  saveExchangeProposalSimulation(exchangeProposalSimulation: IExchangeProposalSimulation[]): Promise<any>;
  saveExchangeProposalPreExecution(exchangeProposalPreExecution: IExchangeProposalPreExecution[]): Promise<any>;
  saveExchangeProposalExecution(exchangeProposalExecution: IExchangeProposalExecution[]): Promise<any>;

  saveCashFlowWithdrawToExternalBank(cashFlowWithdrawToExternalBank: ICashFlowWithdrawToExternalBank[]): Promise<any>;
}
