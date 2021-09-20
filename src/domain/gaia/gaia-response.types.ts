import { Document, Model } from "mongoose";

export interface IGaiaResponse { 
    ip: String;
    clOrdID: String;
    sessionID: String;
    receivedFix: String;
    createdAt: Number;
 }

export interface IGaiaResponseDocument extends IGaiaResponse, Document {}
export interface IGaiaResponseModel extends Model<IGaiaResponseDocument> {}