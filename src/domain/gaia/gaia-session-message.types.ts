import { Document, Model } from "mongoose";

export interface IGaiaSessionMessage {
    sessionID: String;
    msgType: String;
    fix: String;
    createdAt: Number;
 }

export interface IGaiaSessionMessageDocument extends IGaiaSessionMessage, Document {}
export interface IGaiaSessionMessageModel extends Model<IGaiaSessionMessageDocument> {}