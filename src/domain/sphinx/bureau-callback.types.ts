import { Document, Model } from "mongoose";

export interface IBureauCallback {
    unique_id: String;
    bureau_data: Object;
    created_at: Number;
}

export interface IBureauCallbackDocument extends IBureauCallback, Document {}
export interface IBureauCallbackModel extends Model<IBureauCallbackDocument> {}