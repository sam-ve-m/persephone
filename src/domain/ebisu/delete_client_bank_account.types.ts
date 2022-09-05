import { Document, Model } from "mongoose";

export interface IDeleteBankAccount { 
    unique_id: String;
    device_info: Object;
    bank_account: Object;
    created_at: Number;
 }

export interface IDeleteBankAccountDocument extends IDeleteBankAccount, Document {}
export interface IDeleteBankAccountModel extends Model<IDeleteBankAccountDocument> {}