import { Document, Model } from "mongoose";

export interface IUpdateBankAccount { 
    unique_id: String;
    device_id: String,
    device_info: Object;
    bank_account: Object;
    created_at: Number;
 }

export interface IUpdateBankAccountDocument extends IUpdateBankAccount, Document {}
export interface IUpdateBankAccountModel extends Model<IUpdateBankAccountDocument> {}