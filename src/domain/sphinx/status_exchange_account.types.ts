import { Document, Model } from "mongoose";

export interface IExchangeAccountStatus {
    unique_id: String;
    status: String;
    created_at: Number;
}

export interface IExchangeAccountStatusDocument extends IExchangeAccountStatus, Document {}
export interface IExchangeAccountStatusModel extends Model<IExchangeAccountStatusDocument> {}