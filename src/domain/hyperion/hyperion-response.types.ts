import { Document, Model } from "mongoose";

export interface IHyperionResponse { 
    ip: String;
    clOrdID: String;
    sessionID: String;
    fix: String;
    json: Object;
    createdAt: Number;
 }

export interface IHyperionResponseDocument extends IHyperionResponse, Document {}
export interface IHyperionResponseModel extends Model<IHyperionResponseDocument> {}