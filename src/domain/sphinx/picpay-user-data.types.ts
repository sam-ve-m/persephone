import { Document, Model } from "mongoose";

export interface IPicpayUserData {
    unique_id: String;
    fields: Object;
    created_at: Number;
}

export interface IPicpayUserDataDocument extends Ipicay, Document {}
export interface IPicpayUserDataModel extends Model<IPicpayUserDataDocument> {}