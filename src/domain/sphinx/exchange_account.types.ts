import { Document, Model } from "mongoose";

export interface IExchangeAccountData {
    unique_id: String;
    status: String;
    cpf: String;
    exchange_account: Object;
    created_at: Number;
}

export interface IExchangeAccountDataDocument extends IExchangeAccountData, Document {}
export interface IExchangeAccountDataModel extends Model<IExchangeAccountDataDocument> {}