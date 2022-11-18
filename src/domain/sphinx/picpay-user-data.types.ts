import { Document, Model } from "mongoose";

export interface IPicpayUserData {
    unique_id: String;
    device_id: String;
    device_info: Object;
    fields: Object;
    created_at: Number;
}

export interface IPicpayUserDataDocument extends IPicpayUserData, Document {}
export interface IPicpayUserDataModel extends Model<IPicpayUserDataDocument> {}