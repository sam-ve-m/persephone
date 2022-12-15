import { Document, Model } from "mongoose";

export interface IExchangeAccountData {
    unique_id: String;
    device_id: String;
    device_info: Object;
    cpf: String;
    exchange_account: Object;
    created_at: Number;
}

export interface IExchangeAccountDataDocument extends IExchangeAccountData, Document {}
export interface IExchangeAccountDataModel extends Model<IExchangeAccountDataDocument> {}