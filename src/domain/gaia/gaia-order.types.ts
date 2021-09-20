import { Document, Model } from "mongoose";

export interface IGaiaOrder {
    ip: String;
    clOrdID: String;
    sessionID: String;
    receivedFix: String;
    sentFix: String;
    createdAt: Number;
 }

export interface IGaiaOrderDocument extends IGaiaOrder, Document {}
export interface IGaiaOrderModel extends Model<IGaiaOrderDocument> {}