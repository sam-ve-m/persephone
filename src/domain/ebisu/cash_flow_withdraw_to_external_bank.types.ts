import { Document, Model } from "mongoose";

export interface ICashFlowWithdrawToExternalBank { 
    unique_id: String;
    device_id: String;
    device_info: Object;
    origin_account: Object;
    account_destination: Object;
    value: Number;
 }

export interface ICashFlowWithdrawToExternalBankDocument extends ICashFlowWithdrawToExternalBank, Document {}
export interface ICashFlowWithdrawToExternalBankModel extends Model<ICashFlowWithdrawToExternalBankDocument> {}