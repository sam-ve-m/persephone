import { Document, Model } from "mongoose";

export interface IAetherInvalidOrder { 
    ip: String;
    clOrdID: String;
    json: Object;
    validationMessage: String;
    created_at: Number;
}

export interface IAetherInvalidOrderDocument extends IAetherInvalidOrder, Document {}
export interface IAetherInvalidOrderModel extends Model<IAetherInvalidOrderDocument> {}