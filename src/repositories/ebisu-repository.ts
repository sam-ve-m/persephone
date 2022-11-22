import { IEbisuRepository } from "@core/repository/iebisu-repository";
import { IRegisterBankAccount, RegisterBankAccountModel } from "@domain/ebisu";
import { IUpdateBankAccount, UpdateBankAccountModel } from "@domain/ebisu";
import { IDeleteBankAccount, DeleteBankAccountModel } from "@domain/ebisu";
import { IExchangeProposalSimulation, ExchangeProposalSimulationModel } from "@domain/ebisu";
import { IExchangeProposalPreExecution, ExchangeProposalPreExecutionModel } from "@domain/ebisu";
import { IExchangeProposalExecution, ExchangeProposalExecutionModel } from "@domain/ebisu";
import { ICashFlowWithdrawToExternalBank, CashFlowWithdrawToExternalBankModel } from "@domain/ebisu";

export class EbisuRepository implements IEbisuRepository {
  saveBankAccountRegisters(bankAccountRegisters: IRegisterBankAccount[]): Promise<any> {
    return RegisterBankAccountModel.insertMany(bankAccountRegisters);
  }
  saveBankAccountUpdates(bankAccountUpdates: IUpdateBankAccount[]): Promise<any>{
    return UpdateBankAccountModel.insertMany(bankAccountUpdates);
  }
  saveBankAccountDeletions(bankAccountDeletions: IDeleteBankAccount[]): Promise<any>{
    return DeleteBankAccountModel.insertMany(bankAccountDeletions);
  }

  
  saveExchangeProposalSimulation(exchangeProposalSimulation: IExchangeProposalSimulation[]): Promise<any>{
    return ExchangeProposalSimulationModel.insertMany(exchangeProposalSimulation);
  }
  saveExchangeProposalPreExecution(exchangeProposalPreExecution: IExchangeProposalPreExecution[]): Promise<any>{
    return ExchangeProposalPreExecutionModel.insertMany(exchangeProposalPreExecution);
  }
  saveExchangeProposalExecution(exchangeProposalExecution: IExchangeProposalExecution[]): Promise<any>{
    return ExchangeProposalExecutionModel.insertMany(exchangeProposalExecution);
  }


  saveCashFlowWithdrawToExternalBank(cashFlowWithdrawToExternalBank: ICashFlowWithdrawToExternalBank[]): Promise<any>{
    return CashFlowWithdrawToExternalBankModel.insertMany(cashFlowWithdrawToExternalBank);
  }
}
