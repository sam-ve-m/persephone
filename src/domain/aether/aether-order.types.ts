import { Document, Model } from "mongoose";

export interface IAetherOrder { 
    ip: String;
    clOrdID: String;
    json: Object;
    fix: String;
    createdAt: Number;
}

export interface IAetherOrderDocument extends IAetherOrder, Document {}
export interface IAetherOrderModel extends Model<IAetherOrderDocument> {}