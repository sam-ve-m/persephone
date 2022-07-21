import { Document, Model } from "mongoose";

export interface IRegisterBankAccount { 
    unique_id: String;
    device_info: Object;
    bank_account: Object;
    _created_at: Date;
 }

export interface IRegisterBankAccountDocument extends IRegisterBankAccount, Document {}
export interface IRegisterBankAccountModel extends Model<IRegisterBankAccountDocument> {}