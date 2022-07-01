import {
  IRegisterBankAccount,
  IUpdateBankAccount,
  IDeleteBankAccount
} from "@domain/ebisu";

export interface IEbisuRepository {
  saveBankAccountRegisters(bankAccountRegisters: IRegisterBankAccount[]): Promise<any>;
  saveBankAccountUpdates(bankAccountUpdates: IUpdateBankAccount[]): Promise<any>;
  saveBankAccountDeletions(bankAccountDeletions: IDeleteBankAccount[]): Promise<any>;
}
