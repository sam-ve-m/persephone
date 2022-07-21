import { IEbisuRepository } from "@core/repository/iebisu-repository";
import { IRegisterBankAccount, RegisterBankAccountModel } from "@domain/ebisu";
import { IUpdateBankAccount, UpdateBankAccountModel } from "@domain/ebisu";
import { IDeleteBankAccount, DeleteBankAccountModel } from "@domain/ebisu";

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
}
