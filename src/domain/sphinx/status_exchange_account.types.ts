import { Document, Model } from "mongoose";

export interface IExchangeAccountStatus {
    unique_id: String;
    device_id: String;
    device_info: Object;
    status: String;
    created_at: Number;
}

export interface IExchangeAccountStatusDocument extends IExchangeAccountStatus, Document {}
export interface IExchangeAccountStatusModel extends Model<IExchangeAccountStatusDocument> {}